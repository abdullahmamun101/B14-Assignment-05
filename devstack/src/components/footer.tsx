function Footer() {
  return (
    <footer className=" border-t border-slate-200 bg-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <span className="font-bold text-lg">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-slate-600 hover:text-pink-600">GitHub</a>
            <a href="#" className="text-slate-600 hover:text-pink-600">Twitter</a>
            <a href="#" className="text-slate-600 hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">PRODUCT</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-pink-600">Home</a></li>
            <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-600">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">COMPANY</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-pink-600">About</a></li>
            <li><a href="#" className="hover:text-pink-600">Contact</a></li>
            <li><a href="#" className="hover:text-pink-600">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">LEGAL</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-2">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-pink-600">Privacy</a>
          <a href="#" className="hover:text-pink-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;