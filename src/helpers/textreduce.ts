export function textReduce(text: string | null) {
  if (!text) {
    return "";
  }
  if (text.length > 10) {
    return text.slice(0, 10) + "...";
  }
  return text;
}
