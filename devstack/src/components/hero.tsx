import bannerStack from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left HERO SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal{' '}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
              Development Stack
            </span>
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          {/*Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="px-6 py-3 rounded-lg font-medium text-white bg-linear-to-r from-orange-500 via-pink-500 to-pink-600 hover:opacity-95 shadow-sm transition-all duration-200">
              Explore Technologies
            </button>

            <button className="px-6 py-3 rounded-lg font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* Right hero section */}
        <div className="flex justify-center md:justify-end">
          <img className="w-full max-w-md h-auto object-contain"
           src={bannerStack} alt="Development Stack Illustration"/>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;