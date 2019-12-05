/**
 * @param {number} seconds
 */
export const formatRemainingTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const [minutesText, secondsText] = [
    minutes,
    seconds % 60,
  ].map(x => String(x).padStart(2, "0"));
  return `${minutesText}:${secondsText}`;
};
