import mainHeroImage from './assets/component-01/Image-01.jpg';
import secondaryHeroImage1 from './assets/component-01/Image-02.jpg';
import secondaryHeroImage2 from './assets/component-01/Image-03.jpg';

function App() {
  return (
    <div className='bg-brand'>
      <main className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='aspect-h-4 aspect-w-3'>
            <img
              src={mainHeroImage}
              alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
              className='h-full w-full object-cover object-center bg-gray-100'
            />
          </div>
          <div className='grid grid-cols-1 gap-4 sm:gap-6'>
            <img
              src={secondaryHeroImage1}
              alt='Top down view of walnut card tray with embedded magnets and card groove.'
              className='h-full w-full object-cover bg-gray-100'
            />
            <img
              src={secondaryHeroImage2}
              alt='Side of walnut card tray with card groove and recessed card area.'
              className='h-full w-full object-cover bg-gray-100'
            />
          </div>

          <div>
            <div className='text-white'>
              <h2 className='text-2xl uppercase font-medium'>
                Answer Your Body's Needs
              </h2>
              <p className='text-lg font-light leading-8 border-t border-white-50 mt-4 pt-8 border-t-2 border-gray-200'>
                The way ingredients are sourced affects the way we nourish our
                bodies. Author Mark Schatzer believes our body naturally
                develops an appetite for the foods and nutrients it needs to be
                healthy, but that artificial flavourings are getting in the way.
                This can be reversed by focusing on high-quality ingredients and
                being mindful as your appetite guides you to consume according
                to your body's needs.
              </p>
            </div>

            <div className='mt-16'>
              <h3 className='text-md text-red-600 font-medium uppercase'>Be Mindful</h3>
              <p className='mt-4 text-white text-lg font-semibold leading-8'>
                Sourcing local or organic food is a good way to start being more
                mindful about what you're cooking and eating.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>All The Latest From AEG</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
