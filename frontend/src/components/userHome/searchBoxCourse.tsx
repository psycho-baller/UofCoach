import { useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { classNames } from 'src/utils';
import { courseCodes as courses } from 'src/assets/data';
export default function SearchBox({
  selectedCourse,
  setSelectedCourse,
}: {
  selectedCourse: any;
  setSelectedCourse: any;
}) {
  const [filteredCourses, setFilteredCourses] = useState<string[]>([]);

  return (
    <Combobox as="div" value={selectedCourse} onChange={setSelectedCourse}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Course Subject you need help with
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => {
            // setQuery(event.target.value)
            // looks through all the Key values in the courseCodes object and filters them based on the query
            setFilteredCourses(
              Object.keys(courses).filter((course) => {
                return course
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase());
              })
            );
            //   displayValue={(course) => course?.code}
          }}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredCourses.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCourses.map((course) => (
              <Combobox.Option
                key={course}
                value={course}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {course}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
