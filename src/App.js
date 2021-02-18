import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
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

    console.log(results);

    const renderedCard = results.map((result) => {
        return (
            <div className="card" key={result.name}>
                <h2>Name: {result.name}</h2>
                <p>Birth year: {result.birth_year}</p>
                <p>Eye color: {result.eye_color}</p>
            </div>
        );
    })

    return (
        <div className="main-window">
            <div className="ui form" style={{}}>
                <label>Search for characters</label>
                <input 
                    className="input"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                />
                
                <button className="ui button" style={{margin: "5px"}}>Save</button>
            </div>

            <div className="character-data">
                {renderedCard}
            </div>
        
        </div>
    )
}

export default App;