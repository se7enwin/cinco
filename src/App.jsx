import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About"
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Cards from './Components/Cards/Cards'
export default function App() {

    // Assign first state
    const [saint, setSaint] = useState([]);
    // Query from Local Host
    const api = 'www.saintseiyaapi.com/api/characters/';
    // Enable cors from localshot     
    const cors = 'https://cors-anywhere.herokuapp.com/'





    async function getApi(id) {
        try {
            //Get saint
            await fetch(`${cors}${api}${id}`).then(a => a.json().then(b => setSaint(old => [...old, b?.data])))

        } catch (error) { console.log(error) }
    }



    return (
        // Main Render Tag
        <div>

            {/* Add first css attribute from jsx syntax */}
            <h3 style={{ color: 'green' }}>Function Component from Local Jsx </h3>
            <Nav getApi={getApi} cors={cors} />
            {/* Click and Enable Cors for a while */}
            <Link target="_blank" to="https://cors-anywhere.herokuapp.com/corsdemo"><h6>Enable Cors for a while</h6></Link>
            {/* Id for first query */}
            <Cards saint={saint} />
            <Routes>
                {/* url path to About.jsx*/}
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}
