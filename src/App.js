import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tags from './components/Tags';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className='d-flex flex-column vh-100 overflow-hidden'>
        <Header/>
        
        <div className='row  bg-black flex-grow-1 m-0 p-0'>
            <div className="col-2 h-100 columns">
                <Sidebar/>
            </div>
            <div className="col-10 h-75 columns">
                <Tags/>
                <VideoCard/>
            </div>
        </div>

    </div>
  );
}

export default App;
