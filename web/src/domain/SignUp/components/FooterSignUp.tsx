export const FooterSignup = (): JSX.Element => {
  return (
    <footer className="w-screen bottom-0 absolute text-gray-400 p-2 font-extralight flex justify-center">
      <span>© {new Date().getFullYear()} - SoftBlog</span>
    </footer>
  );
};
