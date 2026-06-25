import React from 'react';
import { Play, Pause, Square } from 'lucide-react';

interface VoiceControlsProps {
  msgId: string;
  text: string;
  speakingMessageId: string | null;
  isSpeechPaused: boolean;
  onSpeak: (text: string, id: string) => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
}

export const VoiceControls: React.FC<VoiceControlsProps> = ({
  msgId,
  text,
  speakingMessageId,
  isSpeechPaused,
  onSpeak,
  onPause,
  onResume,
  onStop,
}) => {
  const isSpeakingThis = speakingMessageId === msgId;

  if (!isSpeakingThis) {
    return (
      <button
        onClick={() => onSpeak(text, msgId)}
        className="p-1.5 text-slate-500 hover:text-blue-400 bg-slate-900/60 border border-slate-800/40 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
        title="Play Response"
        aria-label="Speak response text"
      >
        <Play className="w-3 h-3 text-slate-400" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/50 rounded-lg p-1">
      {isSpeechPaused ? (
        <button
          onClick={onResume}
          className="p-1 text-slate-400 hover:text-blue-400 rounded transition-colors cursor-pointer"
          title="Resume Speech"
          aria-label="Resume response speech"
        >
          <Play className="w-3 h-3 text-slate-300" />
        </button>
      ) : (
        <button
          onClick={onPause}
          className="p-1 text-slate-400 hover:text-blue-400 rounded transition-colors cursor-pointer"
          title="Pause Speech"
          aria-label="Pause response speech"
        >
          <Pause className="w-3 h-3 text-slate-300" />
        </button>
      )}
      <button
        onClick={onStop}
        className="p-1 text-red-500 hover:text-red-400 rounded transition-colors cursor-pointer"
        title="Stop Speech"
        aria-label="Stop response speech"
      >
        <Square className="w-3 h-3 fill-red-500 text-red-500" />
      </button>
    </div>
  );
};
