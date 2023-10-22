import { useState } from 'react';
import mainHeroImage from './assets/component-01/Image-01.jpg';
import mainHeroImageLarge from './assets/component-01/Image-01@2x.jpg';
import secondaryHeroImage1 from './assets/component-01/Image-02.jpg';
import secondaryHeroImage1Large from './assets/component-01/Image-02@2x.jpg';
import secondaryHeroImage2 from './assets/component-01/Image-03.jpg';
import secondaryHeroImage2Large from './assets/component-01/Image-03@2x.jpg';
import Preview from './components/Preview';
import SlideOver from './components/SlideOver';

import { posts } from './data';

function App() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<Record<string, number>>({});

  const recordClick = (blog: string) => {
    console.log(blog);
    setResult((prevResult) => {
      const currentBlogCount = prevResult[blog] ?? 0;

      return {
        ...prevResult,
        [blog]: currentBlogCount + 1,
      };
    });
  };

  const totalCount = Object.values(result).reduce(
    (total, result) => total + result,
    0
  );

  return (
    <div className='bg-brand'>
      <main className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-44 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <Hero />
        <Blogs onRecordClick={recordClick} />
        <SlideOver open={open} onOpen={setOpen}>
          <h3 className='text-white font-medium mb-3'>
            Total Count: {totalCount}
          </h3>
          <pre className='text-white overflow-x-scroll'>
            {JSON.stringify(result, undefined, 2)}
          </pre>
        </SlideOver>
        <button
          title='Result'
          className='fixed z-90 bottom-10 right-8 bg-red-600 px-4 py-2 rounded-md flex justify-center items-center text-white text-xl hover:bg-red-700'
          onClick={() => setOpen((prev) => !prev)}
        >
          Result ({String(totalCount)})
        </button>
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <div className='aspect-h-4 aspect-w-3'>
        <Preview>
          <picture>
            <source media='(max-width: 800px)' srcSet={mainHeroImageLarge} />
            <img
              src={mainHeroImage}
              alt='Main Hero Image 1'
              className='h-full w-full object-cover'
            />
          </picture>
        </Preview>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:gap-6'>
        <Preview>
          <picture>
            <source
              media='(max-width: 800px)'
              srcSet={secondaryHeroImage1Large}
            />
            <img
              src={secondaryHeroImage1}
              alt='Secondary Hero Image 1'
              className='h-full w-full object-cover'
            />
          </picture>
        </Preview>
        <Preview>
          <picture>
            <source
              media='(max-width: 800px)'
              srcSet={secondaryHeroImage2Large}
            />
            <img
              src={secondaryHeroImage2}
              alt='Secondary Hero Image 2'
              className='h-full w-full object-cover'
            />
          </picture>
        </Preview>
      </div>

      <div>
        <div className='text-white'>
          <h2 className='text-2xl uppercase font-medium'>
            Answer Your Body's Needs
          </h2>
          <p className='text-lg font-light leading-8 border-t border-white-50 mt-4 pt-8 border-t-2 border-gray-200'>
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally develops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </p>
        </div>

        <div className='mt-16'>
          <h3 className='text-md text-red-600 font-medium uppercase'>
            Be Mindful
          </h3>
          <p className='mt-4 text-white text-lg font-semibold leading-8'>
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </p>
        </div>
      </div>
    </section>
  );
}

type BlogProps = {
  onRecordClick: (blog: string) => void;
};

function Blogs({ onRecordClick }: BlogProps) {
  return (
    <section>
      <h2 className='text-4xl text-center uppercase text-white font-medium'>
        All The Latest From AEG
      </h2>

      <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='flex max-w-xl flex-col items-start justify-between group/image'
          >
            <div className='w-full border-transparent group-hover/image:border-b-4 group-hover/image:border-red-600 ease-in-out delay-150 duration-200'>
              <img
                src={post.image.default}
                alt={post.description}
                className='w-full object-cover'
              />
            </div>
            <div className='group relative'>
              <h3 className='mt-6 text-lg font-semibold leading-6 text-white hover:text-gray-400'>
                <a href='#' onClick={() => onRecordClick(post.title)}>
                  <span className='absolute inset-0' />
                  {post.title}
                </a>
              </h3>
              <p className='mt-3 line-clamp-3 text-base leading-6 text-gray-400'>
                {post.description}
              </p>
            </div>
            <div className='relative mt-8'>
              <div className='text-sm uppercase leading-6 border-transparent hover:border-b hover:border-red-600 delay-150 duration-200'>
                <p className='font-semibold text-white hover:text-gray-400'>
                  <a href='#' onClick={() => onRecordClick(post.title)}>
                    <span className='absolute inset-0' />
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default App;
