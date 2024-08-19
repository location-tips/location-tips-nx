import React, { useRef, useState } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiCloseCircle } from '@front/icons/MdiCloseCircle';
import { MdiStop } from '../../icons/MdiStop';
import { MdiMicrophoneOutline } from '../../icons/MdiMicrophoneOutline';

import styles from './VoiceUploadField.module.css';

interface VoiceUploadFieldProps {
  name: string;
}

export const VoiceUploadField: React.FC<VoiceUploadFieldProps> = ({
  name = 'voice',
}) => {
  const [recording, setRecording] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const containerRef = useRef(null);

  const { wavesurfer } = useWavesurfer({
    container: containerRef,
    waveColor: '#085CFF',
    height: 34,
    width: 100,
    normalize: true,
    cursorWidth: 0,
    progressColor: '#085CFF',
  });

  const updateWaveform = async (audioBlob?: Blob) => {
    if (audioBlob) {
      wavesurfer?.loadBlob(audioBlob);
    } else {
      wavesurfer?.empty();
    }
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks: Blob[] = [];

      mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
        chunks.push(event.data);
      });

      mediaRecorderRef.current.addEventListener('stop', () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });

        if (audioBlob) {
          const file = new File([audioBlob], 'voiceRecording.wav', {
            type: 'audio/wav',
          });
          const container = new DataTransfer();

          container.items.add(file);

          const fileInput = fileInputRef.current;

          if (fileInput) {
            fileInput.files = container.files;
          }
        }

        updateWaveform(audioBlob);
      });

      mediaRecorderRef.current.start();

      setRecording(true);
    } catch (error) {
      console.error('Error recording voice:', error);
    }
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const resetVoiceRecording = () => {
    updateWaveform();
    setRecording(false);
    fileInputRef.current && (fileInputRef.current.value = '');
  };

  return (
    <MFlex>
      {!recording && (
        <MButton mode="tertiary" type="button" onClick={handleStartRecording}>
          <MdiMicrophoneOutline width={20} height={20} />
        </MButton>
      )}
      {recording && (
        <MButton mode="tertiary" type="button" onClick={handleStopRecording}>
          <MdiStop width={20} height={20} />
        </MButton>
      )}
      <input
        ref={fileInputRef}
        type="file"
        name={name}
        style={{ display: 'none' }}
      />
      <div className={styles.waveformContainer}>
        <div ref={containerRef}></div>
        {Math.round(wavesurfer?.getDuration() ?? 0) > 0 && (
          <MButton
            mode="transparent"
            type="button"
            onClick={resetVoiceRecording}
            className={styles.removeButton}
          >
            <MdiCloseCircle width={16} height={16} />
          </MButton>
        )}
      </div>
    </MFlex>
  );
};

export default VoiceUploadField;
