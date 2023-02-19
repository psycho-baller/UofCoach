import { Route, Routes } from 'react-router-dom';
import Welcome from 'src/components/welcome';
import Dashboard from 'src/components/userHome/dashboard';
import Profile from 'src/components/userHome/profile';
import FindHelp from 'src/components/userHome/findHelp';
import Availability from 'src/components/userHome/availability';
import ScheduleHelp from 'src/components/userHome/scheduleHelp';
import TutorScheduleHelp from 'src/components/userHome/tutorScheduleHelp';
import TutorFindHelp from 'src/components/userHome/tutorFindHelp';
import SignIn from 'src/components/SignIn';
import Register from 'src/components/Register';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/find-help" element={<FindHelp />}></Route>
        <Route path="/schedule-help" element={<ScheduleHelp />}></Route>
        <Route path="/tutor/find-help" element={<TutorFindHelp />}></Route>
        <Route
          path="/tutor/schedule-help"
          element={<TutorScheduleHelp />}
        ></Route>
        <Route path="/availability" element={<Availability />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
