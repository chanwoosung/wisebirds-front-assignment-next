export const paging = (page: number, size: number, content: any[]) => {
  const startIndex = (page - 1) * size;
  const endIndex = Math.min(startIndex + size, content.length);
  return content.slice(startIndex, endIndex);
};
