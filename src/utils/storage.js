const KEY = "workout-progress";

export const getProgress = () =>
  JSON.parse(localStorage.getItem(KEY)) || {};

export const saveProgress = (data) =>
  localStorage.setItem(KEY, JSON.stringify(data));

export const todayKey = (date = new Date()) =>
  date.toISOString().split("T")[0];
