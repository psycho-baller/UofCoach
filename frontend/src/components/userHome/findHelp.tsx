import { useState } from 'react';
import Layout from './layout';
import SearchBoxCourse from './searchBoxCourse';
import SearchBoxNumber from './searchBoxNumber';

export default function Page() {
  const [query, setQuery] = useState('');
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
  return (
    <Layout title="Find Help Now">
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
    </Layout>
  );
}
