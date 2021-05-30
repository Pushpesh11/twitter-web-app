import './App.css';
import Left from './Left';
import Main from './Main';
import Right from './Right';
import { useGlobalContext} from './Context';


export default function App() {
   const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className='all'>
      <div className="all-inside">
        <div className="twitter-left">
          <Left/>
        </div>
        <div className="twitter-center">
          <Main/>
        </div>
        <div className="twitter-right">
          <Right/>
        </div>
      </div>
    </div>
  )
}

