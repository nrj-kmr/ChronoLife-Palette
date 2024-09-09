import { useNavigate } from 'react-router-dom'
import Pallete from '../components/Pallete';

const Dashboard = () => {
     const navigate = useNavigate()
     return (
          <>
               <div className='flex space-x-5'>
                    <label >
                         <span>Start date: </span>
                         <input type="date" />
                    </label>
                    <label>
                         <span>End date: </span>
                         <input type="date" />
                    </label>
               </div>
               <Pallete />
          </>
     );
}

export default Dashboard;