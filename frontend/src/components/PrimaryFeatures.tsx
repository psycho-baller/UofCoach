import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

import { Container } from './Container';
import backgroundImage from '../assets/images/orange.jpg';
import screenshotExpenses from '../assets/images/screenshots/expenses.png';
import screenshotPayroll from '1.png';
import screenshotReporting from '../assets/images/screenshots/reporting.png';
import screenshotVatReturns from '../assets/images/screenshots/vat-returns.png';
import clsx from 'clsx';

const features = [
  {
    title: 'Get the help you need in record time',
    description:
      'Search for tutors by inputting any course to see all of the tutors who are available to help.',
    image: '1.png',
  },
  {
    title: 'Tutor courses',
    description:
      "Select courses that you are willing to tutor to be shown on those courses' tutor listing.",
    image: '2.png',
  },
  {
    title: 'Communicate',
    description:
      'We provide a direct message service as a means of communication between tutors and tutees.',
    image: '1.png',
  },
  {
    title: 'Dual benefit',
    description:
      'You can be a tutor, a tutee, or both. Tutor one course while being tutored for another. There are no limitations!',
    image: '2.png',
  },
];

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }: any) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <img
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        // width={2245}
        // height={1636}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Find tutors you need or tutor those who need you.
          </h2>
          <h2 className="mt-6 text-3xl tracking-tight text-blue-100">
            Or do both!
          </h2>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }: any) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <img
                        className="w-full"
                        src={feature.image}
                        alt=""
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
