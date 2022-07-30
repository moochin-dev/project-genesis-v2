export const imgLoader = ({ src, width }: { src: string; width: number }) => {
  return src + `?w=${width}`;
};
