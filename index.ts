export const startTimer = () => {
  const start = performance.now();

  return () => {
    const end = performance.now();
    const elapsed = (end - start).toFixed(3);
    console.log(`Time elapsed: ${elapsed} ms`);
  };
};

export const setIntersection = <T>(...sets: Set<T>[]): Set<T> => {
  if (sets.length === 0) {
    return new Set<T>();
  }

  if (sets.length === 1) {
    return sets[0];
  }

  const intersection = new Set<T>();
  const [a, b, ...rest] = sets;

  for (const item of a) {
    if (b.has(item)) {
      intersection.add(item);
    }
  }

  return setIntersection(intersection, ...rest);
};
