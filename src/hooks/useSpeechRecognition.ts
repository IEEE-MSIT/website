import { useState, useEffect, useRef, useCallback } from 'react';

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message?: string;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface ISpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<ISpeechRecognitionInstance | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    try {
      const win = window as unknown as {
        SpeechRecognition?: new () => ISpeechRecognitionInstance;
        webkitSpeechRecognition?: new () => ISpeechRecognitionInstance;
      };
      const SpeechRecognitionAPI = win.SpeechRecognition || win.webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        // Wrap instantiation in try-catch to prevent iframe/sandboxed crashes
        const rec = new SpeechRecognitionAPI() as ISpeechRecognitionInstance;
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = 'en-US';
        recognitionRef.current = rec;
        setIsSupported(true);
      }
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn('Speech recognition is not accessible or restricted by policy:', err);
      }
      setIsSupported(false);
    }
  }, []);

  const startListening = useCallback(() => {
    if (!isSupported || !recognitionRef.current) {
      setError('Voice input is not supported in this browser.');
      return;
    }

    setError(null);
    setIsProcessing(true);
    setTranscript('');

    const rec = recognitionRef.current;

    rec.onstart = () => {
      setIsListening(true);
      setIsProcessing(false);
    };

    rec.onend = () => {
      setIsListening(false);
      setIsProcessing(false);
    };

    rec.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsListening(false);
      setIsProcessing(false);
      if (event.error === 'not-allowed') {
        setError('Microphone access was denied.');
      } else {
        setError('Voice input error.');
      }
    };

    rec.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        setTranscript((prev) => {
          const spacing = prev.trim() ? ' ' : '';
          return prev + spacing + finalTranscript;
        });
      }
    };

    try {
      rec.start();
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn('Speech recognition start error:', err);
      }
    }
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Already stopped
      }
    }
  }, []);

  const cancelListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        // Already aborted
      }
    }
    setIsListening(false);
    setIsProcessing(false);
    setTranscript('');
    setError(null);
  }, []);

  const resetTranscript = useCallback(() => {
    setTranscript('');
  }, []);

  return {
    isListening,
    isProcessing,
    transcript,
    error,
    isSupported,
    startListening,
    stopListening,
    cancelListening,
    resetTranscript,
    setError,
  };
}
