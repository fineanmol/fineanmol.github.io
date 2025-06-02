import React, { useState, useRef, useEffect } from 'react';
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
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current && !priority) {
      observer.observe(imgRef.current);
    } else {
      setIsInView(true);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Load image when in view
  useEffect(() => {
    if (isInView && src) {
      // For SVG files, use them directly
      if (src.endsWith('.svg')) {
        setImageSrc(src);
        return;
      }

      // For other images, try to use WebP if supported
      const supportsWebP = () => {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      };

      if (supportsWebP() && !src.includes('.webp')) {
        // Try to load WebP version first
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const img = new Image();
        img.onload = () => setImageSrc(webpSrc);
        img.onerror = () => setImageSrc(src);
        img.src = webpSrc;
      } else {
        setImageSrc(src);
      }
    }
  }, [isInView, src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    // Fallback to original source if optimized version fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  const imageClasses = `
    optimized-image
    ${className}
    ${isLoaded ? 'loaded' : 'loading'}
    ${placeholder === 'blur' ? 'blur-placeholder' : ''}
  `.trim();

  return (
    <div className="optimized-image-container" ref={imgRef}>
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="image-placeholder"
          style={{ 
            width: width || '100%', 
            height: height || 'auto',
            aspectRatio: width && height ? `${width}/${height}` : 'auto'
          }}
        />
      )}
      
      {imageSrc && (
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
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 