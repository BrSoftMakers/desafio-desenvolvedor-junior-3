export default function adjustTime(time: string): string {
  const date = new Date(time);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
