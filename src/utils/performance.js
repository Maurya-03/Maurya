// Performance monitoring utility
export const performanceMonitor = {
  // Measure component render time
  measureRenderTime: (componentName, startTime) => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);

    // Report to analytics if needed
    if (renderTime > 16.67) { // More than one frame at 60fps
      console.warn(`${componentName} is rendering slowly: ${renderTime.toFixed(2)}ms`);
    }
  },

  // Measure page load performance
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load metrics:', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          totalTime: perfData.loadEventEnd - perfData.fetchStart
        });
      });
    }
  },

  // Lazy load images with intersection observer
  lazyLoadImage: (imgElement, src) => {
    if (!('IntersectionObserver' in window)) {
      imgElement.src = src;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    observer.observe(imgElement);
  },

  // Debounce function for performance
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for performance
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.measurePageLoad();
}