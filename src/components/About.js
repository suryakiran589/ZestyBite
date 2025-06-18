function About(){
    return (
        <div className="px-4 py-6 max-w-[90%] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px] mx-auto font-poppins text-[#3E2723]">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">About This App</h2>

  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed mb-4 text-justify">
    This is a demo restaurant application built to simulate a real-world online food ordering experience.
    Users can explore a list of restaurants, view detailed menus, and add their favorite dishes to a dynamic cart — all within a smooth and responsive UI.
  </p>

  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed mb-4 text-justify">
    The goal of this project is to showcase my frontend development skills using modern tools and workflows.
    It demonstrates how I structure scalable React applications, manage state effectively, and build visually engaging interfaces using Tailwind CSS.
  </p>

  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed mb-4 text-justify">
    While this is not a real restaurant, this project reflects real-world functionality. It includes routing via <code>react-router</code>,
    responsive design, and component-based architecture.
  </p>

  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed mb-4 text-justify">
    🔧 <strong>Tech Stack:</strong> React.js, Tailwind CSS, JavaScript (ES6+), and optionally dummy or Swiggy-like public JSON for restaurant data.
  </p>

  <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-justify">
    🚀 Future updates will include search functionality, category filters, and backend integration using Firebase or Supabase.
  </p>

  <p className="mt-6 text-center sm:text-left text-sm sm:text-base">
    🌐 View source on{" "}
    <a
      href="https://github.com/yourusername/restaurant-app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      GitHub
    </a>
  </p>
</div>

    )
}

export default About