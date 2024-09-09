import React from 'react';
import './Life.css'; // Assuming you have a CSS file for styling

const Life = ({ startDate, endDate }) => {
     const start = new Date(startDate);
     const end = new Date(endDate);
     const today = new Date();
     const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
     const days = [];

     // Generate the array of days between startDate and endDate
     for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
          days.push(new Date(d));
     }

     return (
          <div className='life-pallete'>
               <span>Start Date: {startDate} </span>
               <span>End Date: {endDate} </span>
               <span>Total Days: {totalDays}</span>
               <div>Life is a journey, not a destination</div>
               <div className="grid-container">
                    {days.map((day, index) => {
                         const isPast = day < today;
                         return (
                              <div
                                   key={index}
                                   className={`grid ${isPast ? 'past' : 'future'}`}
                              ></div>
                         );
                    })}
               </div>
          </div>
     );
}

export default Life;