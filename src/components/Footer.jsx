export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-[#FFF7E9] text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">

        {/* LEFT: BRAND INFO */}
        <div>
          <h3 className="text-2xl font-semibold">Your Name</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Building modern, clean and responsive web experiences
            with a focus on quality and performance.
          </p>
        </div>

        {/* CENTER: QUICK LINKS */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Navigate</h4>
          <ul className="flex flex-col gap-2 text-gray-700">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </ul>
        </div>

        {/* RIGHT: SOCIAL LINKS */}
        <div className="md:text-right text-center">
          <h4 className="text-xl font-semibold mb-4">Connect</h4>

          <div className="flex md:justify-end justify-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:opacity-70"
            >
              <svg width="26" height="26" fill="currentColor">
                <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.3 3.4 9.8 8 11.4.6.1.8-.3.8-.6v-2c-3.4.8-4.1-1.7-4.1-1.7-.6-1.6-1.4-2-1.4-2-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .8.8 1.2 1.9 1.2 3.2 0 4.8-2.9 5.8-5.7 6.1.5.4.9 1.2.9 2.4v3.6c0 .3.2.8.8.6 4.6-1.6 8-6.1 8-11.4A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:opacity-70"
            >
              <svg width="26" height="26" fill="currentColor">
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1s2.48 1 2.48 2.5ZM0 25h5V8H0v17Zm9 0h5v-9c0-2 .8-3 2.6-3 1.7 0 2.4 1.2 2.4 3v9h5v-10c0-4.7-2.5-7-6-7-2.6 0-4 .9-4.7 2h-.1V8H9v17Z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:opacity-70"
            >
              <svg width="26" height="26" fill="currentColor">
                <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.7-1.5 2-2.7-1 .6-2 .9-3 1.1C19.5 2.7 18 2 16.5 2c-3 0-5.4 2.6-5.4 5.8 0 .4 0 .9.1 1.3C7.3 9 3.9 7.4 1.6 4.7c-.5.9-.8 2-.8 3.2 0 2 1 3.8 2.5 4.8-.8 0-1.6-.3-2.3-.7v.1c0 2.7 1.8 5 4.2 5.5-.4.1-.7.2-1.1.2-.3 0-.6 0-.9-.1.6 2.1 2.4 3.6 4.4 3.6-1.8 1.5-4 2.4-6.3 2.4H0c2.3 1.5 5 2.3 7.9 2.3 9.5 0 14.7-8.5 14.7-15.8v-.7c1-.7 1.7-1.6 2.3-2.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
