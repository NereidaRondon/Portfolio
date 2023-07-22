import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '@mui/material';

export default function Card(props) {

    let title = props.project.title;
    let iframe = props.project.iframe;
    let role = props.project.role;
    let tech = props.project.tech;
    let details = props.project.details;
    let link = props.project.link;
    let storyboard = props.project.storyboard;
    let story = props.project.story;


    return(
      
      <Container fluid className="justify-content-start">
        <Row>
          <Col xs={6} md={4}>
            
            <LinkContainer to="/projects">
                 
            <Button sx={{my:4, px:5, fontSize:'1.25rem',}} 
              variant="outlined"  
              startIcon={<ArrowBackRoundedIcon />} 
              size="large" 
              color="secondary" 
              elevation='5' 
              href="/projects"
              > Back
            </Button>
              </LinkContainer>

          </Col>

          <Col xs={6} lg={6}></Col>
        </Row>

        <Row className="pb-5">
          <Col xs={12}>
            <h2>{title}</h2>
          </Col>
        </Row>

        <Row className="pb-5 align-items-start">
          <Col xs={12} xl={6}>
            <iframe src={iframe} style={{border:'1px #060b36 solid'}} height="400px" width="500px" className='course--frame'></iframe>
          </Col>
          <Col xs={12} xl={6} className='fs-4 text-start p-4'>
            <strong>My Role: </strong>{role}

            <br></br>
            <br></br>

            <strong>Technologies: </strong>{tech}

            <br></br>
            <br></br>

            <strong>Details: </strong>{details}

            <br></br>
            <br></br>

            <Link to={link} target='_blank'>
              <Button sx={{mx:1, my:4, px:5, fontSize:'1.25rem',}} 
                variant="contained"  
                endIcon={<AdsClickRoundedIcon />} 
                size="large" 
                color="secondary" 
                elevation='5' 
              >
                Website
              </Button>
            </Link>

          { story && (
            <Link to={storyboard} target='_blank'>
              <Button sx={{mx:1, my:4, px:2, fontSize:'1.25rem',}} 
                variant="contained"  
                endIcon={<PictureAsPdfIcon />} 
                size="large" 
                color="primary" 
                elevation='5' 
              >
                Storyboard
              </Button>
            </Link>) }

          </Col>
        </Row>


      </Container>

     
    );
}