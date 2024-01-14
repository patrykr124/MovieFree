import React from "react";
import "./Home.scss";
import Navbar from "./component/Navbar";
import Featured from "./component/Featured";
import List from "./component/List";
import { useState,useEffect } from "react";
import Parallax from "./component/Parallax";
import AboutMovie from "./component/AboutMovie";
import Footer from "./component/Footer";


function Home() {

  const [movieLists, setMovieLists] = useState([[], [], []]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=762a72353fd50323abb2f73d3207a943&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        );

        if (response.ok) {
          const json = await response.json();
          const movies = json.results;

          const firstList = movies.slice(0, 10); // Pierwsze 5 filmów
          const secondList = movies.slice(10, 20); // Drugie 5 filmów
          const thirdList = movies.slice(12, 25); // Trzecie 5 filmów

          setMovieLists([firstList, secondList, thirdList]);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMovies();
  }, []);


  return (
    <>
      <Navbar />
      <Featured />
      <List id="serial" title="Serial" movieList={movieLists[0]}/>
      <List id="movies"  title="movies" movieList={movieLists[1]}/>
      <List id="new"  title="new in USA" movieList={movieLists[2]}/>
      <Parallax/>
      <List  title="Premiere" movieList={movieLists[1]}/>
      <AboutMovie deadline="April, 12, 2024"/>
      <Footer/>
    </>
  );
}

export default Home;