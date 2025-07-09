const Landing = () => {
  return (
    <section className="w-full h-screen bg-[url('/landing/hero.png')] bg-center bg-cover flex items-center p-10 md:p-40 relative font-main">
      {/* Slight shade over the background image */}
      <div className="absolute inset-0 w-full h-full bg-black/80"></div>
        {/* Content over the background image */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-light">BUILDING LIVES</h1>
        <h1 className="text-4xl md:text-6xl font-light mt-2">BEYOND BOUNDARIES</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8 font-light">
          <button className="px-8 py-3 bg-orange-500 rounded-full border-2 border-orange-500 text-white hover:border-white transition-all ease-in-out duration-200 cursor-pointer">Book an appointment</button>
          <button className="px-8 py-3 border border-orange-500 rounded-full text-orange-500 hover:text-orange-500 hover:border-0 hover:bg-white transition-all ease-in-out duration-200 cursor-pointer">Show me more</button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
