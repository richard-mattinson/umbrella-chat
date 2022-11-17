const Landing = () => {
  return (
    <>
      <main className="relative z-10 flex flex-col p-[10px]">
        {/* <p className="text-4xl">welcome to</p> */}
        <p className="font-['Teko'] text-9xl mt-5">scrolls</p>
        <p>A messaging app by</p>
        <p className="text-3xl hover:text-yellow-700 transition">
          <a
            href="https://github.com/richard-mattinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Richard Mattinson
          </a>
        </p>
      </main>
    </>
  );
};

export default Landing;
