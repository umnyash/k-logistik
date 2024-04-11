export function throttle(callback, delay) {
  let lastTime = 0;
  let timeoutId;

  return (...rest) => {
    const now = new Date();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), delay);

    if (now - lastTime >= delay) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
