import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App=()=>{
  const apiKey= process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
    return (
      <BrowserRouter>
      <div className="my-background"></div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress }
        />
        <Routes>
        <Route exact path="/NewsHub"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={6} category="general" />}>
          </Route>
        <Route exact path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={6} category="general" />}>
          </Route>
        <Route exact path="/business"
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={6} category="business" />}>
          </Route>
          <Route exact path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={6} category="entertainment" />}>
          </Route>
          <Route exact path="/health"
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" pageSize={6} category="health" />}>
          </Route>
          <Route exact path="/science"
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="in" pageSize={6} category="science" />}>
          </Route>
          <Route exact path="/sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={6} category="sports" />}>
          </Route>
          <Route exact path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={6} category="technology" />}>
          </Route>
        </Routes>
        
      </BrowserRouter>
    )
  }
export default App;