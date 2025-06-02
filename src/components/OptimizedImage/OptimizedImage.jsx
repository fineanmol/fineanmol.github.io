import React, { useState, useRef, useEffect, useCallback } from 'react';
import './OptimizedImage.css';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = 'blur',
  quality = 75,
  sizes,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Check WebP support
  const supportsWebP = useCallback(() => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(false);
        return;
      }
      
      const webpData = canvas.toDataURL('image/webp');
      resolve(webpData.indexOf('data:image/webp') === 0);
    });
  }, []);

  // Load image when in view
  useEffect(() => {
    if (!isInView || !src) return;

    // For SVG files, use them directly
    if (src.endsWith('.svg')) {
      setImageSrc(src);
      return;
    }

    // For other images, try to use WebP if supported
    const loadOptimizedImage = async () => {
      try {
        const webpSupported = await supportsWebP();
        
        if (webpSupported && !src.includes('.webp')) {
          // Try to load WebP version first
          const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          const img = new Image();
          
          img.onload = () => {
            setImageSrc(webpSrc);
            setHasError(false);
          };
          
          img.onerror = () => {
            setImageSrc(src);
            setHasError(false);
          };
          
          img.src = webpSrc;
        } else {
          setImageSrc(src);
        }
      } catch (error) {
        console.warn('Error loading optimized image:', error);
        setImageSrc(src);
      }
    };

    loadOptimizedImage();
  }, [isInView, src, supportsWebP]);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleImageError = useCallback(() => {
    // Fallback to original source if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    } else {
      setHasError(true);
    }
  }, [imageSrc, src]);

  const imageClasses = `
    optimized-image
    ${className}
    ${isLoaded ? 'loaded' : 'loading'}
    ${placeholder === 'blur' ? 'blur-placeholder' : ''}
    ${hasError ? 'error' : ''}
  `.trim();

  const placeholderStyle = {
    width: width || '100%',
    height: height || 'auto',
    aspectRatio: width && height ? `${width}/${height}` : 'auto'
  };

  return (
    <div 
      className="optimized-image-container" 
      ref={imgRef}
      role="img"
      aria-label={alt}
    >
      {!isLoaded && !hasError && placeholder === 'blur' && (
        <div 
          className="image-placeholder"
          style={placeholderStyle}
          aria-hidden="true"
        />
      )}
      
      {hasError && (
        <div 
          className="image-error"
          style={placeholderStyle}
          role="alert"
          aria-label={`Failed to load image: ${alt}`}
        >
          <span>Image failed to load</span>
        </div>
      )}
      
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          className={imageClasses}
          width={width}
          height={height}
          loading={loading}
          sizes={sizes}
          onLoad={handleImageLoad}
          onError={handleImageError}
          decoding="async"
          aria-describedby={`img-desc-${alt.replace(/\s+/g, '-').toLowerCase()}`}
          {...props}
        />
      )}
      
      {/* Hidden description for screen readers */}
      <span 
        id={`img-desc-${alt.replace(/\s+/g, '-').toLowerCase()}`}
        className="sr-only"
      >
        {alt}
      </span>
    </div>
  );
};

export default OptimizedImage; 