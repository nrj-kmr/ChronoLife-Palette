import React, { useState } from 'react';
import Life from './Life';

const Pallete = () => {
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [errorMessage, setErrorMessage] = useState('');
     const [life, setLife] = useState(false);

     const printLife = () => {
          if (!startDate || !endDate) {
               setErrorMessage('Please select start and end date');
          } else {
               setErrorMessage('');
               setLife(true);
          }
     }

     return (
          <div>
               <h1>Life Pallete</h1>
               <span>Select dates you wanna live your life between</span>
               <div>
                    <label>
                         <span>Start date: </span>
                         <input
                              type="date"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                         />
                    </label>
                    <label>
                         <span>End date: </span>
                         <input
                              type="date"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                         />
                    </label>
               </div>
               <button onClick={printLife}>print your life</button>
               {errorMessage ? <div style={{ color: 'red' }}>{errorMessage}</div> : ""}
               {life && <Life startDate={startDate} endDate={endDate} />}
          </div>
     );
};

export default Pallete;