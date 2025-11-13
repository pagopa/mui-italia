export function isIosDevice() {
  return (
    typeof navigator !== 'undefined' &&
    !!(
      navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g)
    )
  );
}
