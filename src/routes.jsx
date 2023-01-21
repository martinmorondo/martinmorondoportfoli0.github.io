import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "./hooks/withRouter";
import { Home } from "./components/home/home";
// import { Portfolio } from "../pages/portfolio";
// import { ContactUs } from "../pages/contact";
import { About} from './components/about/aboutt';
import { Technologies } from './components/technologies/technologies'; 
import { Socialicons } from "./components/socialIcons/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Technologies />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s-c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;