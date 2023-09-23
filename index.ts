export const startTimer = () => {
  const start = performance.now();

  return () => {
    const end = performance.now();
    const elapsed = (end - start).toFixed(3);
    console.log(`Time elapsed: ${elapsed} ms`);
  };
};
