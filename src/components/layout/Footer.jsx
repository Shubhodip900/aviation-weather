const Footer = () => {
    return (
      <footer className="container mx-auto flex flex-col-reverse items-center justify-between gap-2 bg-neutral-100 py-6 md:flex-row">
        <span className="text-sm">Copyright &copy; 2024 Shubhodip pal</span>
        <a
          className="font-bold"
          href="https://github.com/Shubhodip900/aviation-weather"
        >
          View Source on GitHub
        </a>
      </footer>
    );
  };
  
  export default Footer;