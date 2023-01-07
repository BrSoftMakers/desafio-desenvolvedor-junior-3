const formattedDate = (date: string) => {
  const createdAt = new Date(date);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(createdAt);
};

export default formattedDate;
