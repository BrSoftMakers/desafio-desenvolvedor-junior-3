export default function isValidPassword(password: string): boolean {
  const passwordPattern =
    /^(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{6,10}$/;

  return passwordPattern.test(password);
}
