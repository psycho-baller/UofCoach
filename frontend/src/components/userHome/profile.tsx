import Layout from './layout';
import { classNames } from 'src/utils';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ListBulletIcon } from '@heroicons/react/24/outline';
// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function CourseBullet({name}: any) {

  const [invisible, setInvisible] = useState(false);

  const removeElement = (e: { preventDefault: () => void; }) => {
    setInvisible(true);
    e.preventDefault()
  };

  return (
    <>   
      {!invisible && 
      <div className="flex flex-row mt-2">
      <p className="text-sm text-gray-500 mr-10">{name}</p>
      <button onClick={removeElement} className='text-red-600 text-sm'>
        [Remove]
      </button>
    </div> }

    </>

  )
}


function CourseList() {
  const [courses, setCourses] = useState([
    { name: 'CPSC 331' },
    { name: 'MATH 271' },
    { name: 'SENG 300' },
    { name: 'CPSC 251' },
  ]);

  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    if (newCourse !== '') {
      setCourses([...courses, { name: newCourse }]);
      setNewCourse('');
    }
  };

  const handleInputChange = (event: any) => {
    setNewCourse(event.target.value);
  };

  return (
    <div>
      {courses.map((course, index) => (
        <CourseBullet key={index} name={course.name} />
      ))}

      <div className="flex flex-row mt-5">
        <input
          defaultValue={'...'}
          value={newCourse}
          onChange={handleInputChange}
          className="w-28 text-sm text-gray-500"
          type="text"
        />
        <button onClick={handleAddCourse} className="text-sm ml-3 text-blue-600">
          [Add course]
        </button>
      </div>
    </div>
  );
}

export default function Settings() {
  const [availableToHire, setAvailableToHire] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [allowCommenting, setAllowCommenting] = useState(true);
  const [allowMentions, setAllowMentions] = useState(true);

  return (
    <Layout title="Edit your profile">
      <main className="relative">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <form
                className="divide-y divide-gray-200 lg:col-span-12"
              >
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">

                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            defaultValue={'Tom Cook'}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            defaultValue={''}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                      <p
                        className="text-sm font-medium text-gray-700"
                        aria-hidden="true"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <img
                              className="h-full w-full rounded-full"
                              src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                              <label
                                htmlFor="mobile-user-photo"
                                className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                                className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden rounded-full lg:block">
                        <img
                          className="relative h-40 w-40 rounded-full"
                          src={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                          alt=""
                        />


                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        defaultValue={'Tom'}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        defaultValue={'Cook'}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URL
                      </label>
                      <input
                        defaultValue={'uofcourse.com/Tom_Cook'}
                        type="text"
                        name="url"
                        id="url"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                      />
                    </div>


                  </div>
                </div>

                {/* Privacy section */}
                <div className="divide-y divide-gray-200 pt-6">
                  <div className="px-4 sm:px-6">
                    <div>
                      <h2 className="text-lg font-medium leading-6 text-gray-900">
                        Tutoring settings
                      </h2>

                    </div>
                    <ul role="list" className="mt-2 divide-y divide-gray-200">
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="text-sm font-medium text-gray-900"
                            passive
                          >
                            Active tutor status
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Set whether you want others to be able to see you listed under courses as an active tutor.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={availableToHire}
                          onChange={setAvailableToHire}
                          className={classNames(
                            availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                            'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              availableToHire
                                ? 'translate-x-5'
                                : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                        <div className="flex flex-col">
                          <Switch.Label
                            as="p"
                            className="text-sm font-medium text-gray-900"
                            passive
                          >
                            Hourly rate
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500">
                            Set an hourly tutoring rate that you would like to be displayed to others.
                          </Switch.Description>
                        </div>
                        <input defaultValue={'0'} className='w-20' type="text" />
                        <p className='pl-2'>$CAD</p>
                      </Switch.Group>
                      <Switch.Group
                        as="li"
                        className="flex items-center justify-between py-4"
                      >
                      <div className="flex flex-col">
                        <Switch.Label 
                          as="p"
                          className="text-sm font-medium text-gray-900"
                          passive>
                          Courses you are interested in tutoring:
                        </Switch.Label>

                        <CourseList></CourseList>


                      </div>
                      

                      </Switch.Group>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
function props(props: any) {
  throw new Error('Function not implemented.');
}

