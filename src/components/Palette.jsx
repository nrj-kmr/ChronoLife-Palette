import React, { useState } from 'react';
import Life from './Life';
import { useNavigate } from 'react-router-dom';

const Palette = () => {
     const navigate = useNavigate();
     const [startDate, setStartDate] = useState('');
     const [endDate, setEndDate] = useState('');
     const [errorMessage, setErrorMessage] = useState('');
     const [life, setLife] = useState(false);

     const printLife = () => {
          if (!startDate || !endDate) {
               setErrorMessage('Please select start and end date! to begin');
          } else {
               setErrorMessage('');
               setLife(true);
          }
     }

     return (
          <div className='bg-slate-500 h-screen'>
               <button
                    onClick={() => navigate('/')}
                    className='bg-gray-100 px-2 py-0.5 rounded-md text-black m-4'
               >
                    Go Home
               </button>
               <div className='text-center'>
                    <h1
                         className='text-4xl text-white font-serif font-medium'
                    >Life Palette</h1>
                    <span
                         className='text-white text-sm'
                    >Select dates you wanna live your life between</span>
               </div>

               <div className='text-center mt-10'>
                    <div className='flex space-x-2 justify-center'>
                         <label>
                              <span className='text-white'>Start date: </span>
                              <input
                                   type="date"
                                   value={startDate}
                                   onChange={(e) => setStartDate(e.target.value)}
                                   className='rounded-md py-1 px-3 bg-slate-600 text-slate-300'
                              />
                         </label>
                         <label>
                              <span className='text-white'>End date: </span>
                              <input
                                   type="date"
                                   value={endDate}
                                   onChange={(e) => setEndDate(e.target.value)}
                                   className='rounded-md py-1 px-3 bg-slate-600 text-slate-300'
                              />
                         </label>
                    </div>
                    <button
                         onClick={printLife}
                         className='bg-gray-200 py-1 px-3 rounded-md text-black mt-4 hover:bg-gray-300'
                    >
                         Print your life
                    </button>
               </div>

               {errorMessage ?
                    <div className='flex justify-center'>
                         <div className='text-red-800 mt-3 bg-red-300 rounded-md py-1 px-4'>
                              {errorMessage}
                         </div>
                    </div> : ""
               }

               {life && <Life startDate={startDate} endDate={endDate} />}

          </div>
     );
};

export default Palette;