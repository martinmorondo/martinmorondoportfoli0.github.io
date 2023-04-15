import React, { useContext } from 'react';
import './home.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introData, meta } from '../../contentOption';
import { Link } from "react-router-dom";
import { LanguagesContext } from '../../context/LanguagesContext';
import { FormattedMessage } from "react-intl";

export const Home = () => {

  const { changeLangToEs, changeLangToEn } = useContext(LanguagesContext);

    return (
        <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro-sec d-block d-lg-flex align-items-center ">
          <div
            className="h-bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introData.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">
                <FormattedMessage id="home-title" defaultMessage="Martín Morondo" />
                </h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introData.animated.first,
                        introData.animated.second,
                        introData.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">
                <FormattedMessage id="home-subtitle" defaultMessage="Tengo 23 años y soy Desarrollador Front End. Actualmente soy estudiante de Ingeniería de Sistemas, cursando tercer año." />           
                  </p>
                <div className="intro-btn-action pb-5">
                  <Link to="/portfolio" className="text-2">
                    <div id="button-p" className="ac-btn btn btn-10">
                      <span>
                        <FormattedMessage id="btn-portfolio" defaultMessage="My portfolio" />  
                      </span>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button-p" className="ac-btn btn btn-91">
                      <span>
                      <FormattedMessage id="btn-contact" defaultMessage="Contact" />                     
                       </span>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
    );
}


