import { useState } from 'react';
import Layout from './layout';
import SearchBox from './searchBox';

export default function Page() {
  const [query, setQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Layout title="Find Help Now">
      <SearchBox
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        query={query}
        setQuery={setQuery}
      />
    </Layout>
  );
}
