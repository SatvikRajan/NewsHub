import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    
    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress }
        />
        <Routes>
        <Route exact path="/NewsHub"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" pageSize={6} category="general" />}>
          </Route>
        <Route exact path="/business"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" pageSize={6} category="business" />}>
          </Route>
          <Route exact path="/entertainment"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" pageSize={6} category="entertainment" />}>
          </Route>
          <Route exact path="/health"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" pageSize={6} category="health" />}>
          </Route>
          <Route exact path="/science"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" pageSize={6} category="science" />}>
          </Route>
          <Route exact path="/sports"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" pageSize={6} category="sports" />}>
          </Route>
          <Route exact path="/technology"
            element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" pageSize={6} category="technology" />}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
