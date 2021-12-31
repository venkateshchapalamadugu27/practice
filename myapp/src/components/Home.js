import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import AndhraBank from './AndhraBank';
import CorporationBank from './CorporationBank';
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';
export default function Home() {
    return (
        <div>
      <BrowserRouter>
        <Routes>
           <Route path="/home" element={<Main />}></Route>
           <Route path="/login" element={<FormRendering />}></Route>  
           <Route path="/logi" element={<ListRendering />}></Route>
           <Route path="/cbank" element={<CorporationBank />}></Route>
           <Route path="/abank" element={<AndhraBank />}></Route> 
        </Routes>
      </BrowserRouter>  

        </div>
    )
}

function Main(){
    return(
        <>
            <h1>::Home Page::</h1>
            <Link to="/login">Login</Link>
            <button>Login</button>
        </>
    )
}