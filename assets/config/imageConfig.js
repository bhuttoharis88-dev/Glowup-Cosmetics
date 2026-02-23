// imageConfig.js

// Configuration for managing image paths and metadata

const imageConfig = {
    basePath: '/assets/images/',  // Base path for images
    formats: ['jpg', 'png', 'gif'], // Supported image formats
    metadata: {
        maxFileSize: 5 * 1024 * 1024, // 5 MB
        allowedDimensions: {
            min: { width: 100, height: 100 }, // Minimum dimensions
            max: { width: 5000, height: 5000 } // Maximum dimensions
        }
    },
    getImagePath: function(imageName, format) {
        if (!this.formats.includes(format)) {
            throw new Error('Invalid image format');
        }
        return `${this.basePath}${imageName}.${format}`;
    }
};

module.exports = imageConfig;
