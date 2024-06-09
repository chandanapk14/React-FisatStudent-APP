import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import ViewAll from './components/ViewAll';
import SearchStudent from './components/SearchStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddStudent/>}/>
        <Route path="/search" element={<SearchStudent/>}/>
        <Route path="/view" element={<ViewAll/>}/>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
