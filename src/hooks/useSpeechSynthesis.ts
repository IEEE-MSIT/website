import { useState, useEffect, useRef, useCallback } from 'react';

export function useSpeechSynthesis() {
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const [isSpeechPaused, setIsSpeechPaused] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Accessing speechSynthesis in some sandboxed environments raises SecurityError
        synthRef.current = window.speechSynthesis;
      } catch (err) {
        if (import.meta.env.DEV) {
          console.warn('Speech synthesis is not accessible or restricted by policy:', err);
        }
      }
    }
  }, []);

  const stop = useCallback(() => {
    if (synthRef.current) {
      try {
        synthRef.current.cancel();
      } catch (err) {
        // Cancel failed
      }
    }
    setSpeakingMessageId(null);
    setIsSpeechPaused(false);
  }, []);

  const pause = useCallback(() => {
    if (synthRef.current && speakingMessageId) {
      try {
        synthRef.current.pause();
        setIsSpeechPaused(true);
      } catch (err) {
        // Pause failed
      }
    }
  }, [speakingMessageId]);

  const resume = useCallback(() => {
    if (synthRef.current && speakingMessageId && isSpeechPaused) {
      try {
        synthRef.current.resume();
        setIsSpeechPaused(false);
      } catch (err) {
        // Resume failed
      }
    }
  }, [speakingMessageId, isSpeechPaused]);

  const speak = useCallback((text: string, msgId: string) => {
    if (!synthRef.current) return;

    stop();

    const cleanText = text
      .replace(/\*\*?/g, '')
      .replace(/###?/g, '')
      .replace(/[-*]\s+/g, '')
      .trim();

    try {
      const utterance = new SpeechSynthesisUtterance(cleanText);

      const voices = synthRef.current.getVoices();
      const naturalVoice = voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft'))
      ) || voices.find((v) => v.lang.startsWith('en'));

      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }

      utterance.onend = () => {
        setSpeakingMessageId(null);
        setIsSpeechPaused(false);
      };

      utterance.onerror = () => {
        setSpeakingMessageId(null);
        setIsSpeechPaused(false);
      };

      utteranceRef.current = utterance;
      setSpeakingMessageId(msgId);
      synthRef.current.speak(utterance);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error('Speech synthesis speak action failed:', err);
      }
    }
  }, [stop]);

  useEffect(() => {
    return () => {
      if (synthRef.current) {
        try {
          synthRef.current.cancel();
        } catch (err) {
          // Cancel failed
        }
      }
    };
  }, []);

  return {
    speak,
    pause,
    resume,
    stop,
    speakingMessageId,
    isSpeechPaused,
  };
}
