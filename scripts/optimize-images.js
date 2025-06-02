#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Simple image optimization script for React portfolio
 * This script helps identify large images that should be optimized
 */

const ASSETS_DIR = path.join(__dirname, '../src/assets/images');
const MAX_FILE_SIZE = 500 * 1024; // 500KB
const LARGE_FILE_SIZE = 1024 * 1024; // 1MB

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeImages() {
  console.log('🔍 Analyzing images in assets directory...\n');
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.log('❌ Assets directory not found:', ASSETS_DIR);
    return;
  }

  const files = fs.readdirSync(ASSETS_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)
  );

  let totalSize = 0;
  const largeFiles = [];
  const mediumFiles = [];

  console.log('📊 Image Analysis Report:');
  console.log('=' .repeat(50));

  imageFiles.forEach(file => {
    const filePath = path.join(ASSETS_DIR, file);
    const size = getFileSize(filePath);
    totalSize += size;

    const sizeFormatted = formatFileSize(size);
    const extension = path.extname(file).toLowerCase();

    if (size > LARGE_FILE_SIZE) {
      largeFiles.push({ file, size, sizeFormatted });
      console.log(`🔴 ${file.padEnd(30)} ${sizeFormatted.padStart(10)} - LARGE`);
    } else if (size > MAX_FILE_SIZE) {
      mediumFiles.push({ file, size, sizeFormatted });
      console.log(`🟡 ${file.padEnd(30)} ${sizeFormatted.padStart(10)} - MEDIUM`);
    } else {
      console.log(`🟢 ${file.padEnd(30)} ${sizeFormatted.padStart(10)} - OK`);
    }
  });

  console.log('\n' + '=' .repeat(50));
  console.log(`📈 Total images: ${imageFiles.length}`);
  console.log(`📦 Total size: ${formatFileSize(totalSize)}`);
  
  if (largeFiles.length > 0) {
    console.log(`\n🚨 ${largeFiles.length} large files found (>1MB):`);
    largeFiles.forEach(({ file, sizeFormatted }) => {
      console.log(`   • ${file} (${sizeFormatted})`);
    });
    console.log('\n💡 Recommendations for large files:');
    console.log('   • Compress images using tools like TinyPNG or ImageOptim');
    console.log('   • Convert to WebP format');
    console.log('   • Consider using responsive images');
  }

  if (mediumFiles.length > 0) {
    console.log(`\n⚠️  ${mediumFiles.length} medium files found (>500KB):`);
    mediumFiles.forEach(({ file, sizeFormatted }) => {
      console.log(`   • ${file} (${sizeFormatted})`);
    });
  }

  // Check for WebP usage
  const webpFiles = files.filter(file => file.endsWith('.webp'));
  console.log(`\n🌐 WebP images: ${webpFiles.length}/${imageFiles.length + webpFiles.length}`);
  
  if (webpFiles.length === 0) {
    console.log('💡 Consider converting images to WebP format for better compression');
  }

  console.log('\n✨ Optimization completed!');
}

function showUsage() {
  console.log(`
🖼️  Image Optimization Helper

Usage: node scripts/optimize-images.js

This script analyzes images in your assets directory and provides
optimization recommendations.

Features:
• Identifies large images that need compression
• Shows total bundle size impact
• Recommends WebP conversion
• Provides actionable optimization tips

For actual image compression, consider using:
• Online: TinyPNG, Squoosh
• CLI: imagemin, sharp
• Build tools: webpack-image-resize-loader
  `);
}

if (require.main === module) {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showUsage();
  } else {
    analyzeImages();
  }
}

module.exports = { analyzeImages }; 