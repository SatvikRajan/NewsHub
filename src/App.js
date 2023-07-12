import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route exact path="/NewsHub" 
              element={<News key="NewsHub"  country="in" pageSize={6} category="general"/>}>
            </Route>
            <Route exact path="/business" 
              element={<News key="business"  country="in" pageSize={6} category="business"/>}>
            </Route>
            <Route exact path="/entertainment"
              element={<News key="entertainment" country="in" pageSize={6} category="entertainment" />}>
            </Route>
            <Route exact path="/general"
              element={<News key="general" country="in" pageSize={6} category="general" />}>
            </Route>
            <Route exact path="/health"
              element={<News key="health" country="in" pageSize={6} category="health" />}>
            </Route>
            <Route exact path="/science"
              element={<News key="science" country="in" pageSize={6} category="science" />}>
            </Route>
            <Route exact path="/sports"
              element={<News key="sports" country="in" pageSize={6} category="sports" />}>
            </Route>
            <Route exact path="/technology"
              element={<News key="technology" country="in" pageSize={6} category="technology" />}>
            </Route>
          </Routes>
        </BrowserRouter>
    )
  }
}
