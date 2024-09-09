import React, { useEffect, useRef, useState } from 'react';

const Life = ({ startDate, endDate }) => {
     const start = new Date(startDate);
     const end = new Date(endDate);
     const today = new Date();
     const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
     const days = [];
     const todayRef = useRef(null);

     const [orientation, setOrientation] = useState(totalDays < 50 ? 'row' : 'col');
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

     return (
          <div className='border border-gray-500 p-4 m-7 rounded-lg'>
               <span>From: {startDate} </span>
               <span>To: {endDate} </span>
               <span>Total Days: {totalDays}</span>
               <div>Life is a journey, not a destination</div>
               <span>Grid Orientation:
                    <button onClick={changeOrientation}>{orientation}</button>
               </span>
               <div className={`flex flex-${orientation} flex-wrap max-h-96 overflow-auto`}>
                    {days.map((day, index) => {
                         const isPast = day < today;
                         const isToday = day.toDateString() === today.toDateString();
                         return (
                              <div
                                   key={index}
                                   ref={isToday ? todayRef : null}
                                   className={`w-4 h-4 border border-white rounded-md ${isToday ? 'bg-green-600' : isPast ? 'bg-blue-500' : 'bg-gray-400'}`}
                              ></div>
                         );
                    })}
               </div>
          </div>
     );
}

export default Life;