export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // +1 because months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

// format date for emergency
export const getMonthName = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
};

export const getDayOfMonth = (dateString: string): string => {
  const date = new Date(dateString);
  return date.getDate().toString();
};

export const getFormattedTime = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
};
