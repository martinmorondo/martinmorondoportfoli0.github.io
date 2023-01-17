import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Header from './components/header/header';
import AnimatedCursor from "../hooks/AnimatedCursor";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    </div>
  )
}

export default App
