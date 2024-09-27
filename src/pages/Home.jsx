import { useNavigate } from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate()
     return (
          <div className='bg-slate-500 h-screen flex justify-center items-center'>
               <div className='text-center'>
                    <h1
                         className='text-4xl text-white font-serif font-medium'
                    >ChronoLife - Pallete</h1>
                    <button
                         onClick={() => navigate('/palette')}
                         className='bg-gray-100 px-5 py-2 rounded-md text-black mt-4 hover:bg-gray-200'
                    >
                         have a glace of your life
                    </button>
               </div>
          </div>
     );
}

export default Home;