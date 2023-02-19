import Layout from './layout';
import { sessions } from '../../assets/data';
import { FaClock, FaCalendar } from 'react-icons/fa';

type Session = {
  id: number;
  tutor_id: number;
  user: string;
  subject_code: string;
  course_id: number;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  description: string;
  rate_per_hr: number;
  is_completed: boolean;
  is_paid: boolean;
  is_online: boolean;
};

export default function Settings() {
  function handleSessionSelect(session: Session): void {
    console.log(session);
  }

  return (
    <Layout title="Help Someone">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Select a session to teach:</h2>
        <ul className="space-y-4">
          {sessions.map((session) => (
            <li
              key={session.id}
              // @ts-ignore
              onClick={() => handleSessionSelect(session as Session)}
              className="border-2 border-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-gray-900">
                  {session.subject_code} {session.course_id}
                </div>
                <div className="text-gray-500 text-sm items-center flex">
                  <FaCalendar className="mr-1" />
                  <div className="text-gray-500 text-sm">{session.date}</div>
                </div>
              </div>
              {/* description */}
              <div className="mt-2 text-gray-500 text-sm">
                {session.description}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-sm">{session.user}</div>
                <div className="text-gray-500 text-sm items-center flex">
                  <FaClock className="mr-1" />
                  {session.start_time}-{session.end_time}{' '}
                  {session.is_online ? '(Online)' : ''}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
