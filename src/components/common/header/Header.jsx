import { BsArrowUpLeft, BsArrowUpRight } from 'react-icons/bs';

export const Header = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-amber-300 uppercase text-6xl mt-10 mb-20">
        Frontend Developer
      </h1>

      <section className="flex-col justify-center text-slate-200">
        <button className="mx-auto flex flex-col items-center w-48 uppercase">
          <div className="flex justify-around w-48 relative">
            <span className="absolute left-0">
              <BsArrowUpLeft />
            </span>
            <span>Portfolio</span>
          </div>
          <span>of Alex Rusovici</span>
        </button>

        <div className="mx-auto w-56 border border-b-1 my-16"></div>

        <button className="mx-auto flex flex-col items-center w-48 uppercase">
          <div className="flex justify-around w-48 relative">
            <span>Let's talk</span>
            <span className="absolute right-0">
              <BsArrowUpRight />
            </span>
          </div>
          <span>about anything</span>
        </button>
      </section>
    </div>
  );
};
