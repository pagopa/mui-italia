export function filterOptionsInternal<T>(
  options: Array<T>,
  state: { inputValue: string; getOptionLabel: (option: T) => string }
): Array<T> {
  const { inputValue, getOptionLabel } = state;
  if (inputValue.trim() === '') {
    return options;
  }
  return options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(inputValue.toLowerCase())
  );
}
