import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "./hooks/withRouter";
import AppRoutes from "./routes";
import Header from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/aboutt';
import { Portfolio } from './components/portfolio/portfolio';
import AnimatedCursor from "./hooks/AnimatedCursor";
import './App.css';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0 , 0);
  }, [pathname]);
  return props.children;
  }
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router>
      <div className='cursor-dot'>
      <AnimatedCursor 
        innerSize = {15}
        outerSize = {15}
        color = "255, 255, 255"
        outerAlpha = {0.4}
        innerScale = {0.7}
        outerScale = {5}
      />
      </div>
      <ScrollToTop>
        <Header />
        {/* <Home />      
        <About />
        <Portfolio /> */}
        <AppRoutes />
      </ScrollToTop>
    </Router>
  )
}

 {/*Agregué desde Home a Portfolio*/} 
