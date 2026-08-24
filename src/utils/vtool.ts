export const getVtoolHref = (vtool?: string | null): string | null => {
  const value = vtool?.trim();
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `https://${value}`;
};
