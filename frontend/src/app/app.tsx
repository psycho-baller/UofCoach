import { Route, Routes } from 'react-router-dom';
import Welcome from 'src/components/welcome';
import Dashboard from 'src/components/userHome/dashboard';
import Profile from 'src/components/userHome/profile';
import FindHelp from 'src/components/userHome/findHelp';
import HelpSomeone from 'src/components/userHome/helpSomeone';
import Availability from 'src/components/userHome/availability';
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/find-help" element={<FindHelp />}></Route>
        <Route path="/help-someone" element={<HelpSomeone />}></Route>
        <Route path="/availability" element={<Availability />}></Route>
      </Routes>
    </>
  );
}

export default App;
