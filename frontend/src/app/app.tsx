import { Route, Routes } from 'react-router-dom';
import Welcome from 'src/components/welcome';
import Dashboard from 'src/components/userHome/dashboard';
import Settings from 'src/components/userHome/settings';
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  );
}

export default App;
