import { useRef, useEffect, useMemo } from "react";

export function useSound(soundUrl: string) {
  const audioCtx = useRef<AudioContext | undefined>();

  useEffect(() => {
    audioCtx.current = new AudioContext();

    return () => {
      if (audioCtx.current) {
        audioCtx.current.close();
      }
    };
  }, []);

  const buffer = useRef<Promise<AudioBuffer> | undefined>();

  useEffect(() => {
    const ctx = audioCtx.current;
    if (ctx) {
      buffer.current = fetch(soundUrl)
        .then(res => {
          if (!res.ok) {
            throw new Error(
              `${res.status}: ${res.statusText}`
            );
          }
          return res.arrayBuffer();
        })
        .then(arrayBuffer =>
          ctx.decodeAudioData(arrayBuffer)
        );
    }
  }, [soundUrl]);

  return useMemo(
    () =>
      async function play(): Promise<void> {
        return (
          buffer.current &&
          buffer.current.then(buf => {
            const ctx = audioCtx.current;
            if (ctx && buf) {
              const source = ctx.createBufferSource();
              source.buffer = buf;
              source.connect(ctx.destination);
              source.start();
            }
          })
        );
      },
    []
  );
}
