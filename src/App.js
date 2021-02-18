import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';



const App = () => {
    const [person, setPerson] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [results, setResults] = useState([{name: '', age: ''}]);


    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearch(person);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }

    }, [person])


    useEffect(() => {
       const search = async () => {
            const { data } = await axios.get(`https://swapi.dev/api/people/?search=${debouncedSearch}`);
            setResults(data.results);
        };
        if (debouncedSearch) {
            search();      
        }
    }, [debouncedSearch])

    // const renderedResults = 

    return (
        <div className="main-window">
            <div className="ui form">
                <label>Search for characters</label>
                <input 
                    className="input"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                />
            </div>
            <div className="character-data">
                <h1>{results[0].name}</h1>
            </div>
        
        </div>
    )
}

export default App;