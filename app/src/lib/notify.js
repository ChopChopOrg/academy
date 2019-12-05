/**
 * @param {string} title
 * @param {NotificationOptions=} options
 */
export async function notify(title, options) {
  if (!("Notification" in window)) {
    // eslint-disable-next-line no-console
    console.log(
      "This browser does not support desktop notifications"
    );
    return null;
  }
  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
  return Notification.permission === "granted"
    ? new Notification(title, options)
    : null;
}
