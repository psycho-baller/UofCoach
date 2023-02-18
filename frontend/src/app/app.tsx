import { Route, Routes } from 'react-router-dom';
import Welcome from 'src/components/welcome';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

export default App;
