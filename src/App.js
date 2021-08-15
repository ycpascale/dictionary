import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"


function App() {

	// meanings is a variable and setMeanings is a function jused to change the state
	//[] is initial state and is an array
	const [meanings, setMeanings] = useState([])

	const dictionaryApi = async() => {
		try {
			const data = await axios.get(
				"https://api.dictionaryapi.dev/api/v2/entries/en/plane"
			);
		} catch(error) {
			console.log(error);
		}
	}

	useEffect(() => {
		dictionaryApi();
	}, [])


	return (
    	<div className="App">Helllo World!</div>
  	);
}

export default App;
