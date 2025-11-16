export default function Footer() {
  return (
    <footer className="mt-20 bg-[#626262] text-[#ffffff] border-t border-[#3B2F0A]">
      <div className="max-w-8xl mx-10 p-20 grid md:grid-cols-4 gap-12">

        {/* BRAND INFO */}
        <div>
          <h3 className="text-3xl font-bold tracking-wide text-[#F4D27A]">
            AYUSH RAJ
          </h3>
          <p className="mt-4 text-[#CFC7B2] leading-relaxed max-w-sm">
            Crafting clean, responsive and performance-focused digital
            experiences. Passionate about UI/UX, web engineering and elegant
            design.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4 text-[#F4D27A]">Navigate</h4>
          <ul className="flex flex-col gap-3 text-[#CFC7B2]">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </ul>
        </div>

        {/* EXTRA LINKS */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4 text-[#F4D27A]">More</h4>
          <ul className="flex flex-col gap-3 text-[#CFC7B2]">
            <a href="/resume.pdf" target="_blank" className="hover:text-white transition">Resume</a>
            <a className="hover:text-white transition">Privacy Policy</a>
            <a className="hover:text-white transition">Terms & Conditions</a>
            <a className="hover:text-white transition">Sitemap</a>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div className="md:text-right text-center">
          <h4 className="text-xl font-semibold mb-4 text-[#F4D27A]">Connect</h4>

          <div className="flex md:justify-end justify-center gap-5 mb-6">

            {/* GitHub */}
            <a href="https://github.com/" target="_blank" className="hover:text-white transition">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 
                5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583
                0-.287-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
                1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 
                3.492.996.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.36-5.466-6.053 
                0-1.337.465-2.43 1.235-3.285-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.254A11.52 11.52 0 0 1 12 5.8c1.02.005 
                2.047.138 3.003.404 2.292-1.576 3.295-1.254 
                3.295-1.254.648 1.653.243 2.873.12 3.176.768.855 
                1.23 1.948 1.23 3.285 0 4.707-2.807 5.747-5.48 
                6.043.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 
                3.286 0 .322.19.703.8.582C20.565 21.795 24 17.295 24 
                12c0-6.63-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white transition">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 
                6S0 5 0 3.5 1.1 1 2.5 1s2.48 
                1 2.48 2.5zM0 8h5v16H0V8zm9 
                0h5v2.3h.1c.7-1.3 2.4-2.6 
                4.9-2.6 5.2 0 6 3.4 6 
                7.8V24h-5v-8.4c0-2-.1-4.6-3-4.6-3 
                0-3.5 2.1-3.5 4.5V24H9V8z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="https://twitter.com/" target="_blank" className="hover:text-white transition">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.4 4.8c-.8.4-1.7.6-2.6.8 
                1-.6 1.6-1.4 2-2.5-.9.5-1.9.9-2.9 
                1.1C19.1 2.9 17.9 2.4 16.6 
                2.4c-2.5 0-4.6 2.2-4.6 4.9 
                0 .4 0 .8.1 1.2C7.9 8.3 4.2 6.4 
                1.7 3.3c-.5.9-.7 1.9-.7 3 
                0 1.9.9 3.6 2.3 4.5-.8 0-1.6-.3-2.3-.6 
                0 2.7 1.8 5 4.2 5.5-.4.1-.8.2-1.2.2-.3 
                0-.6 0-.9-.1.6 2 2.5 3.6 4.7 
                3.7C5.5 22 3.4 22.7 1.2 22.7H0c2.3 
                1.4 5 2.2 7.8 2.2 9.4 0 14.5-8.4 
                14.5-15.7v-.7c.9-.7 1.7-1.5 2.3-2.4z" />
              </svg>
            </a>
          </div>

          {/* CONTACT */}
          <div className="text-[#CFC7B2] text-sm">
            <p className="mb-2">📍 India</p>
            <p className="hover:text-white transition cursor-pointer">✉ ayush@example.com</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#3B2F0A] py-6 text-center text-[#BBAF95] text-sm">
        © {new Date().getFullYear()} Ayush Raj — All rights reserved.
      </div>
    </footer>
  );
}
