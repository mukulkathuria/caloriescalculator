export const checkString: (val: string) => Boolean = (value: string) => {
  const s2 = value.trim();
  if (!s2) return true;
  if (/([a-zA-Z])/.test(s2)) {
    return false;
  }
  return true;
};
