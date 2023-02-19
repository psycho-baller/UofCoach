import { useState } from 'react';
import DateTimeInput from './dateTimeInput';
import Input from './input';
import Layout from './layout';
import SearchBoxCourse from './searchBoxCourse';
import SearchBoxNumber from './searchBoxNumber';
import TextArea from './textArea';

export default function Page() {
  const [description, setDescription] = useState('');
  const [selectedCourseSubject, setSelectedCourseSubject] = useState() as [
    string | undefined,
    () => void
  ];
  const [selectedCourseNumber, setSelectedCourseNumber] = useState() as [
    number,
    () => void
  ];
  // const courseSelectionStyling: string = {selectedCourseSubject ? 'bg-blue-500' : 'bg-gray-500'}
  let courseSelectionStyling = '';
  if (selectedCourseSubject) {
    courseSelectionStyling = 'justify-evenly';
  }

  // POST request to REST backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      description,
      selectedCourseSubject,
      selectedCourseNumber,
    };
    const res = await fetch('/api/findHelp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <Layout title="Find Help Now" className="xl:mx-16 lg:mx-12">
      <form
        action="/api/findHelp"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className={`flex ${courseSelectionStyling}`}>
          <SearchBoxCourse
            selectedCourse={selectedCourseSubject}
            setSelectedCourse={setSelectedCourseSubject}
          />
          <SearchBoxNumber
            selectedSubject={selectedCourseSubject}
            selectedNumber={selectedCourseNumber}
            setSelectedNumber={setSelectedCourseNumber}
          />
        </div>
        <div className="">
          <TextArea description={description} setDescription={setDescription} />
        </div>
        <div className="grid grid-cols-12 xl:gap-8 lg:gap-6 gap-4 ">
          {/* location */}
          <Input name="location" className="sm:col-span-6 col-span-12" />
          {/* pay */}
          <Input name="Minimum Pay/hr" className="sm:col-span-3 col-span-6" />
          <Input name="Maximum Pay/hr" className="sm:col-span-3 col-span-6" />
          {/* date and time */}
          <div className="col-span-24 sm:col-span-12 sm:flex sm:justify-evenly">
            <DateTimeInput name="Start Time" className="grid" />
            <DateTimeInput name="End Time" className="" />
          </div>
        </div>
        {/* submit button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
}
