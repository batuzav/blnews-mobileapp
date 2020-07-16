export const showNotification = (payload = {}) => ({
  type: "SHOW_NOTIFICATION",
  payload,
});
export const hideNotification = () => ({
  type: "HIDE_NOTIFICATION",
});
