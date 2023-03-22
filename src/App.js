import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Folder from './pages/Folder';
import UnderFolder from './pages/UnderFolder';
import AddFolder from './components/folder-actions/add-folder/AddFolder';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Folder/>}/>
      <Route path='/:id' element={<UnderFolder/>}/>
      <Route path='/addfolder' element={<AddFolder/>}/>
      <Route path='/editfolder/:id' element={<AddFolder/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
