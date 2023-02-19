import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

export default function DateTimeInput({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  // @ts-ignore
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div {...props}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <div className="mt-1">
        <DatePicker
          selected={startDate}
          // @ts-ignore
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          filterTime={filterPassedTime}
          dateFormat="MMMM d, yyyy h aa"
        />
      </div>
    </div>
  );
}
