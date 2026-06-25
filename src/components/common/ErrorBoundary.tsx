import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log details in development environment
    if (import.meta.env.DEV) {
      console.error('Uncaught error inside Chatbot:', error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="fixed bottom-6 right-6 z-50 bg-[#101B2E] border border-red-900/50 rounded-2xl p-5 text-xs text-red-300 w-80 shadow-2xl font-sans">
            <div className="font-bold text-red-400 mb-1 text-sm flex items-center gap-1.5">
              ⚠️ Chatbot Offline
            </div>
            <p className="leading-relaxed">Something went wrong. Please refresh the page.</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
