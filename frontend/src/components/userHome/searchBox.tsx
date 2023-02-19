import { useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { classNames } from 'src/utils';
import { courseCodes as courses } from 'src/assets/data';
export default function SearchBox({
  selectedCourse,
  setSelectedCourse,
  query,
  setQuery,
}: {
  selectedCourse: any;
  setSelectedCourse: any;
  query: any;
  setQuery: any;
}) {
  //   const [courses, setCourses] = useState<string[]>([]);
  const filteredCourses =
    query === ''
      ? courses
      : courses.filter((course) => {
          return course.toLowerCase().includes(query.toLowerCase());
        });
  // turn this to useState
  // const [selectedCourse, setSelectedCourse] = useState(null);
  // fetch Courses from GET API call
  //   useEffect(() => {
  //     // regex to split the course code into subject and course number (e.g. CPSC 123 -> CPSC, 123; MATH-101 -> MATH, 101)
  //     const match = query.match(/^([A-Z]+[- ]?\d+)[ -]?(\d+)$/i);
  //     const [_, subject, courseNumber] = match;
  //     fetch('https://www.uofcourse.com/api/courses', {
  //       method: 'GET',
  //       //   mode: 'no-cors',
  //       headers: {
  //         // 'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const courseCodes = data.results.map(
  //           (course: any) => course.code
  //         ) as string[];
  //         // filter only the course codes from the response (query)
  //         // courseCodes.filter((course) => {
  //         //     return course.toLowerCase().includes(query.toLowerCase());
  //         // });

  //         console.log(courseCodes);

  //         setCourses(courseCodes);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, [query]);

  return (
    <Combobox as="div" value={selectedCourse} onChange={setSelectedCourse}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Course you need help with
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          //   displayValue={(course) => course?.code}
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
