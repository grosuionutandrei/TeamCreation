
import './App.css'
import {CreateTeam} from "./components/CreateTeam.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {


  return (
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<CreateTeam/>} ></Route>

         </Routes>
     </BrowserRouter>
  )
}

export default App
