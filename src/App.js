import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import MovieGrid from './components/movies/MovieGrid';
import axios from 'axios';
import './App.css';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const result = await axios("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=3");
      setMovies(result.data.results);
      setIsLoading(false);
    }
    fetchMovies();
  }, [])

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(text) {
    fetch(SEARCH_API + text)
      .then((res) => res.json())
      .then((data) => {
          setMovies(data.results);
      });

      setText("");
  }
  
}

const onChange = (e) => {
    setText(e.target.value);
}


  return (
    <div className="container">
      <Header />
        <form onSubmit={handleOnSubmit}>
            <input 
              className="search"
              type="search"  
              placeholder="Search..." 
              value={text}
              onChange={onChange}
            />
        </form>
      <MovieGrid isLoading={isLoading} movies={movies} />
    </div>
  );
}

export default App;
