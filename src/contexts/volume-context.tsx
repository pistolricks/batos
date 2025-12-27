import { createContext, useContext, createSignal, JSX } from 'solid-js';

interface VolumeContextType {
  volume: () => number;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  setIsMuted: (muted: boolean) => void;
  toggleMute: () => void;
}

const VolumeContext = createContext<VolumeContextType>();

export function VolumeProvider(props: { children: JSX.Element }) {
  const [volume, setVolume] = createSignal(50);
  const [isMuted, setIsMuted] = createSignal(false);

  const toggleMute = () => setIsMuted(!isMuted());

  return (
    <VolumeContext.Provider value={{ 
      volume, 
      isMuted, 
      setVolume, 
      setIsMuted, 
      toggleMute 
    }}>
      {props.children}
    </VolumeContext.Provider>
  );
}

export function useVolume() {
  const context = useContext(VolumeContext);
  if (!context) {
    throw new Error('useVolume must be used within a VolumeProvider');
  }
  return context;
}
