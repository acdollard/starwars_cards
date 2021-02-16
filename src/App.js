import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {styles} from './style.css';



const App = () => {
    const [people, setPeople] = useState('Darth Vader');
    const [results, setResults] = useState([])

    useEffect(() => {
       const search = async () => {
            const { data } = await axios.get(`https://swapi.dev/api/people/?search=${people}`);
            setResults(data.results[0]);
        };
        search();
    }, [people])

    console.log(results);

    return (
        <div className="main-window">
            <div className="form">
                <label>Search for characters</label>
                <input 
                        className="input"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                        />
                
            </div>
            <div className="character-data">
                <h1>{results.name}</h1>
                <p>gender: {results.gender}</p>
                <p>eye color: {results.eye_color}</p>
            </div>
        
        </div>
    )
}

export default App;