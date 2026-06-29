import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div role="status" aria-live="polite" className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary" aria-hidden="true" />
        <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
