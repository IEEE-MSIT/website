
export const trackPageLoad = (pageName: string) => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const loadTime = endTime - startTime;
    
   
    console.log(`Page Load: ${pageName} - ${loadTime.toFixed(2)}ms`);
  };
};

export const observeImageLoad = (img: HTMLImageElement, callback?: () => void) => {
  const startTime = performance.now();
  
  img.onload = () => {
    const loadTime = performance.now() - startTime;
    console.log(`Image loaded in ${loadTime.toFixed(2)}ms`);
    callback?.();
  };
};

export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};
