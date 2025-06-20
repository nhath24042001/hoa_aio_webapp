export function convertToTitleCase(text: string): string {
  if (!text) return '';

  return text
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export const getClass = (className: string | undefined, currentMode: string) => {
  return currentMode === 'light' ? `--${className}` : `--${className}-dark`;
};
