export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(undefined, args);
    }, wait);
  };
}