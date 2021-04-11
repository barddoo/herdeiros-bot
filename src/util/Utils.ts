export default {
  printf(format: string, ...args: string[]): string {
    return format.replace(/{(\d+)}/g, (match, number) =>
      typeof args[number] != 'undefined' ? args[number] : match,
    );
  },
};
