// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setData(data.message)
            setIsLoaded(true);
        })
    }, [])
console.log(data)
    return (
        isLoaded
        ? <img alt="A Random Dog" src={data}></img>
        : <p>Loading...</p>
    )
}

export default App;