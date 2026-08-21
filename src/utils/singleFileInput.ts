/**
 * Truncate file name string if it is longer than 30 characters.
 * Keeps the file extension.
 *
 * @param fileName
 * @returns truncated file name
 */
export const truncateFileName = (fileName: string) => {
  const splittedFileName = fileName.split('.');
  const fileExtension = splittedFileName[1];
  const truncatedFileName = splittedFileName[0];
  if (truncatedFileName.length >= 30) {
    return `${truncatedFileName}... .${fileExtension ?? ''}`;
  }
  return fileName;
};

/**
 * Check if a mime type matches the set given in accept
 *
 * @link https://stackoverflow.com/a/66489392
 *
 * @param type the mime type to test, ex image/png
 * @param accept the mime types to accept, ex audio/*,video/*,image/png
 * @returns true if the mime is accepted, false otherwise
 */
export function verifyAccept(type: string, accept?: Array<string>): boolean {
  if (!accept) {
    return true;
  }
  return accept.includes(type) || accept.includes(type.split('/')[0] + '/*');
}

export function generateRandomID(): string {
  /* eslint-disable no-bitwise */
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const randomNum =
      typeof window !== 'undefined'
        ? window.crypto.getRandomValues(new Uint8Array(1))[0] | 0
        : (Math.random() * 16) | 0;
    const v = c === 'x' ? randomNum : (randomNum & 0x3) | 0x8;
    return v.toString(16);
  });
}
