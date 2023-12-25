import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';

function App() {


  return (
    <>
   
    <BrowserRouter >
      <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
