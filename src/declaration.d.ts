interface Window {
  webkitAudioContext: typeof AudioContext
}

declare module 'ml5' {
  interface Pitch {
    getPitch(cb: (err: Error, frequency: number) => void): void
  }
  function pitchDetection(
    path: string,
    audioContext: AudioContext,
    mic: MediaStream,
    moduleLoaded: () => void
  ): Pitch
}

declare module '../models/crepe'
