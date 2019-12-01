import React, { useRef, useEffect, useMemo } from "react";

/**
 * @param {string} soundUrl
 */
export function useAlarmSound(soundUrl) {
  /**
   * @type {React.MutableRefObject<AudioContext | undefined>}
   */
  const audioCtx = useRef();

  useEffect(() => {
    audioCtx.current = new AudioContext();

    return () => {
      if (audioCtx.current) {
        audioCtx.current.close();
      }
    };
  }, []);

  /**
   * @type {React.MutableRefObject<Promise<AudioBuffer> | undefined>}
   */
  const buffer = useRef();

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

  return useMemo(async function playAlarmSound() {
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
  }, []);
}
