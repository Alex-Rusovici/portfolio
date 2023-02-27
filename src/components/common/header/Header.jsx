import Image from 'next/image';

const html = 'self-start italic text-zinc-500';
const h1 =
  'bg-gradient-to-r from-red-400 via-amber-500 to-purple-500 bg-clip-text text-transparent';
const h2 = 'font-bold text-zinc-200 text-4xl';
const h3 = 'text-left text-xl text-zinc-200';
const bold = 'font-bold';

export const Header = () => {
  return (
    <div className="bg-zinc-600 p-4">
      <div className="wrapper py-4 px-4 bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-2xl">
        <div className="container mx-auto lg:flex lg:justify-between">
          <section className="flex flex-col gap-8 justify-center text-start text-zinc-200 mb-8 lg:mb-0">
            <div>
              <p className={html}>{`<h1>`}</p>
              <h1 className="font-bold text-left text-8xl">
                <span className={h1}>Hello, World</span>
              </h1>
              <p className={html}>{`</h1>`}</p>
            </div>
          </section>

          <section className="lg:flex lg:justify-start lg:items-center">
            <div className="flex flex-col gap-4">
              <div>
                <p className={html}>{`<h2>`}</p>
                <h2 className={h2}>
                  My name is <span className={h1}>Alex</span>
                </h2>
                <p className={html}>{`</h2>`}</p>
              </div>

              <div>
                <p className={html}>{`<h3>`}</p>
                <h3 className={h3}>
                  I am a junior frontend developer with <br /> a passion for
                  minimalistic design
                </h3>
                <p className={html}>{`</h3>`}</p>
              </div>

              <div>
                <p className={html}>{`<button>`}</p>
                <button className="font-bold text-left text-xl">
                  Let's get in touch
                </button>
                <p className={html}>{`</button>`}</p>
              </div>
            </div>

            <div>
              <Image
                src={'/../public/images/dev/dev.png'}
                width={426}
                height={500}
                priority={true}
                alt={`developer`}
              ></Image>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
