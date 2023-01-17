import React from 'react';
import './about.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    dataAbout,
    meta,
    workTimeLine,
    skills,
    services,
} from '../../contentOption';


const About = () => {
    return (
        <HelmetProvider>
            <Container className='About-header'>
            <Helmet>
                <meta charSet = "utf-8" />
                <title>About | {meta.title}</title>
                <meta name = "description" content = {meta.description} />
            </Helmet>
            <Row className='mb-5 mt-3 pt-md-3'>
                <Col lg = "8">
                    <h1 className='display-4 mb-4'>About me</h1>
                    <hr className='t-border my-4 ml-0 text-left' />
                </Col>
            </Row>
            <Row className='sec-sp'>
                <Col lg = "5">
                    <h3 className='color-sec py-4'>{dataAbout.title}</h3>
                </Col>
                <Col lg = "7" className='d-flex align-items-center'>
                    <div>
                        <p>{dataAbout.aboutme}</p>
                    </div>
                </Col>
            </Row>
            <Row className=" sec-sp">
          <Col lg="5">
            <h3 className="color-sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {workTimeLine.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec-sp">
          <Col lg="5">
            <h3 className="color-sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec-sp">
          <Col lang="5">
            <h3 className="color-sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service-title">{data.title}</h5>
                  <p className="service-desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        </Container>
      </HelmetProvider>
    );
}

export default About;