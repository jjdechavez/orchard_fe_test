import mainHeroImage from './assets/component-01/Image-01.jpg';
import mainHeroImageLarge from './assets/component-01/Image-01@2x.jpg';
import secondaryHeroImage1 from './assets/component-01/Image-02.jpg';
import secondaryHeroImage1Large from './assets/component-01/Image-02@2x.jpg';
import secondaryHeroImage2 from './assets/component-01/Image-03.jpg';
import secondaryHeroImage2Large from './assets/component-01/Image-03@2x.jpg';
import Preview from './components/Preview';

import { posts } from './data';

function App() {
  return (
    <div className='bg-brand'>
      <main className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-44 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <Hero />
        <Blogs />
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
              alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
              className='h-full w-full object-cover object-center bg-gray-100'
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
              alt='Top down view of walnut card tray with embedded magnets and card groove.'
              className='h-full w-full object-cover bg-gray-100'
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
              alt='Side of walnut card tray with card groove and recessed card area.'
              className='h-full w-full object-cover bg-gray-100'
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

function Blogs() {
  return (
    <section>
      <h2 className='text-4xl text-center uppercase text-white font-medium'>
        All The Latest From AEG
      </h2>

      <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='flex max-w-xl flex-col items-start justify-between'
          >
            <div className='w-full relative border-b-4 border-red-600'>
              <img
                src={post.image.default}
                alt={post.description}
                className='w-full object-cover'
              />
            </div>
            <div className='group relative'>
              <h3 className='mt-6 text-lg font-semibold leading-6 text-white group-hover:text-gray-400'>
                <a href='#'>
                  <span className='absolute inset-0' />
                  {post.title}
                </a>
              </h3>
              <p className='mt-3 line-clamp-3 text-base leading-6 text-gray-400'>
                {post.description}
              </p>
            </div>
            <div className='relative mt-8 flex items-center gap-x-4'>
              <div className='text-sm uppercase leading-6 border-b border-red-600'>
                <p className='font-semibold text-white hover:text-gray-400'>
                  <a href='#'>
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
