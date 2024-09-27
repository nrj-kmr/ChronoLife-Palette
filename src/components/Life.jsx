import React, { useEffect, useRef, useState } from 'react';

const Life = ({ startDate, endDate }) => {
     const start = new Date(startDate);
     const end = new Date(endDate);
     const today = new Date();
     const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
     const days = [];
     const todayRef = useRef(null);

     const [orientation, setOrientation] = useState(totalDays <= 50 ? 'row' : 'col');
     useEffect(() => {
          if (todayRef.current) {
               todayRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
               });
          }
     }, [orientation, todayRef]);

     const changeOrientation = () => {
          setOrientation(orientation === 'row' ? 'col' : 'row');
     }

     // Generate the array of days between startDate and endDate
     for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          days.push(new Date(d));
     }

     const selectedDay = (day, isToday) => {
          // if the selected day is in past, then give option to add a memory
          // and if the selected day is today or in future, then give option to add a task
          alert(`You selected: ${isToday ? `${day.toDateString()} (Today)` : day.toDateString()}`);
     }

     return (
          <div className='border border-gray-200 max-w-screen max-h-screen p-3 m-5 rounded-lg text-gray-300 text-center'>
               <div className='flex space-x-3 justify-center font-serif text-xl font-semibold text-gray-800'>
                    <span>From: {startDate} </span>
                    <span>To: {endDate} </span>
               </div>
                    <div className='font-serif text-lg rounded-lg'>Total Days: {totalDays}</div>
                    <div className='font-serif text-orange-300'>Remember: Life is a journey, not a destination</div>
               <button
                    onClick={changeOrientation}
                    className='bg-green-300 px-4 py-1 rounded-md text-green-700 mt-2'
               >
                    Change Grid Orientation to, {orientation}
               </button>
               <div className={`flex flex-${orientation} flex-wrap m-5 p-2 max-h-96 overflow-auto justify-center`}>
                    {days.map((day, index) => {
                         const isPast = day < today;
                         const isToday = day.toDateString() === today.toDateString();
                         return (
                              <div
                                   key={index}
                                   ref={isToday ? todayRef : null}
                                   className={`w-3 h-3 m-0.5 border border-slate-700 rounded-sm ${isToday ? 'bg-green-700' : isPast ? 'bg-blue-400' : 'bg-gray-300'}`}
                                   title={`${isToday ? `${day.toDateString()} (Today)` : day.toDateString()}`}
                                   onClick={() => selectedDay(day, isToday)}
                              ></div>
                         );
                    })}
               </div>
          </div>
     );
}

export default Life;