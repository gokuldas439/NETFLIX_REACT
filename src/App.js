import React from 'react'
// import ReactPlayer  from 'react-player'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action,romance,originals} from './constants/urls'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  return (<div>
    <div className="App">
        <Header/>
        <Banner/>
        <RowPost url={originals} name="Trending" />
        <RowPost url={action} name="Netflix Orginals" small="smallPoster"/>
        <RowPost url={romance} name="Anime" small="extraSmallPoster"/>
    </div>
    <Footer />
    </div>
  );
}

export default App;
