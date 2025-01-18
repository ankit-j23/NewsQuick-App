import './App.css';

import React,{useState}  from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App (props) {
  const pageSize = 9 ;

  const [Progress, setProgress] = useState(0);


    return (
      <div>
        <Router>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={Progress}
          />
          <Navbar />
          {/* <News setProgress={setProgress} pageSize = {11} country = "us" category = "general"/> */}
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />}></Route>
            {/* <Route exact path='/general' element = {<News setProgress={setProgress} key="general" pageSize = {props.pageSize} country = "us" category = "general"/>}></Route> */}
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />}></Route>
            <Route exact path='technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

