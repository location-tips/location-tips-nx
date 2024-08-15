import React, { useRef, useState } from 'react';
import { MdiStop } from '../../icons/MdiStop';
import { MdiMicrophoneOutline } from '../../icons/MdiMicrophoneOutline';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { useWavesurfer } from '@wavesurfer/react';

interface VoiceUploadFieldProps {
  name: string;
}

const VoiceUploadField: React.FC<VoiceUploadFieldProps> = ({
  name = 'voice'
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
    progressColor: '#085CFF'
  });

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
        wavesurfer && wavesurfer.loadBlob(audioBlob);

        if (audioBlob) {
          const file = new File([audioBlob], 'voiceRecording.wav', {
            type: 'audio/wav'
          });
          const container = new DataTransfer();

          container.items.add(file);

          const fileInput = fileInputRef.current;

          if (fileInput) {
            fileInput.files = container.files;
          }
        }
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
      <div ref={containerRef} />
    </MFlex>
  );
};

export default VoiceUploadField;
