import { useNavigate } from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate()
     return (
          <div>
               <h1>ChronoLife - Pallete</h1>
               <button onClick={() => navigate('/life-pallete')}>have a glace of your life</button>
          </div>
     );
}

export default Home;