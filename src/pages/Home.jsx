import { useNavigate } from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate()
     return (
          <div>
               <h1>ChronoLife - Pallete</h1>
               <button onClick={() => navigate('/dashboard')}>Go to dashboard</button>
               {/* note : write the login and signup page here */}
               {/* then collect the user information */}
          </div>
     );
}

export default Home;