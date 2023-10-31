// for emergency
export const removeNewLines = (text: string) => {
  return text?.replace(/\n/g, " ");
};

export const capitalizeFirstLetter = (text: string) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
