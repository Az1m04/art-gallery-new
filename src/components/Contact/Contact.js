import React from "react";
import styled from "styled-components";

import Footer from "../../sections/Footer";
import Loader from "../Loader";
import ScrollTriggerProxy from "../ScrollTriggerProxy";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import about from "../../assets/art/about.jpg";
import Apoorva from "../../assets/teams/Apoorva Subbanna.jpg";
import Seema from "../../assets/teams/Seema Subbanna.jpg";
import Dhruv from "../../assets/teams/Dhruv Saklani.jpg";
import { useState } from "react";
const Section = styled.section`
  position: absolute;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -5rem auto;

  background-color: ${(props) => props.theme.body};

  @media (max-width: 600px) {
    min-height: 200vh !important;
    width: 100vw;
  }

  @media (max-width: 48em) {
    width: 90vw;
    min-height: 120vh !important;
    background-color: transparent;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const SectionRight = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.body};

  @media (max-width: 600px) {
    min-height: 200vh !important;
    width: 100vw;
  }

  @media (max-width: 48em) {
    width: 90vw;
    flex-direction: column;
    min-height: 220vh !important;
    background-color: transparent;
  }

  @media (max-width: 30em) {
    width: 100vw;
    min-height: 210vh !important;

    // margin-top: -60rem;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "ArialBold";
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 0;
  left: 13%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
    position: relative;
    margin-left: -40rem;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
    position: relative;
    margin-left: -10rem;
  }
`;

const SubTitle = styled.h6`
  width: 70vw;
  font-size: ${(props) => props.theme.fontmd};
  font-family: "Kaushan Script";
  font-weight: 100;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontsm} - 5vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Left = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: "ArialMedium";
  z-index: 5;
  margin-top: 10%;
  display: flex;
  justify-content: flex-end;
  margin-right: 4rem;
  width: 100%;

  .details {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 64em) {
    width: 80%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 80%;
    position: relative;
    justify-content: flex-start;
    margin-top: 0rem;
    margin-bottom: 5rem;
    padding: 2rem;
    font-weight: 600;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
    margin-top: 4rem;
  }
`;

const Right = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: "ArialMedium";
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;


  .contactForm {
    padding: 2rem;
    width:100%;
    display:flex;
    flex-direction:column;
    background-color:rgb(34,34,34);
    gap:1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  
  .contactForm > .heading {
    display:flex;
    flex-direction:column;
    gap:0.5rem;
  }

  button{
    width: 40%;
    padding: 1em;
    margin-top: 1rem;
    border: 1px solid rgb(49,48,45);
    cursor:pointer;
    background-color:rgb(49,48,45);
    color:#fff;
  }


  input {
    width: 100%;
    height:44px;
    margin-top: 1rem;
    border-style: none;
    border: 1px solid rgb(49,48,45);;
    transition: 0.1s ease;
    background-color:rgb(49,48,45);
    color:#fff;
  }

  input:hover {
    border-color:  #fff;
  }
.submitButton {
  widh:100%;
  text-align:center;
}
  textarea {
    width: 100%;
    margin-top: 1rem;
    border-style: none;
    border: 1px solid rgb(49,48,45);;
    transition: 0.1s ease;
    background-color:rgb(49,48,45);
    color:#fff;
  }

  textarea:hover {
    border-color:  #fff;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: block;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }

  @media (max-width: 48em) {
    width: 100%;
    display: block;
    position: relative;
    margin:1rem;
    align-items: center;
    justify-content: center;

    .contactForm {
      width:75%;
    margin-left:1rem;
    }
    

  }
`;

const SectionBanner = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 64em) {
    display: block;
  }
  @media (max-width: 48em) {
    display: block;
    margin-top: -50rem;
  }
  @media (max-width: 48em) {
    margin-top: -30rem;
  }
`;

const Contact = ({ loaded, containerRef }) => {
  const [contactDetails, setContactDetails] = useState(null);
  const validate = (str) => {
    return /[a-zA-Z]/.test(str);
  };

  const validatEmail = (str) => {
    return /\S+@\S+\.\S+/.test(str);
  };

  const handleEvent = (e) => {
    setContactDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log(contactDetails, "details");
  };
  return (
    <div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options

          smartphone: {
            smooth: true,
          },

          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
      >
        <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <SectionBanner id="home">
              <div
                style={{
                  position: "absolute",
                  zIndex: "10",
                  left: "40%",
                  top: "30%",
                }}
              ></div>
              <div id="about">
                <ul id="slideWrap">
                  <li>
                    <img src={about} height="20vh" alt="" />
                  </li>
                </ul>
              </div>
            </SectionBanner>
            <SectionWrapper>
              <Section id="content">
                <Title
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
                >
                  Contact -
                  <div style={{ border: "1px solid white", width: "4vw" }} />
                </Title>
              </Section>
            </SectionWrapper>
            <SectionRight id="right">
              {/* <Title
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
                >
                  Overview -
                  <div style={{ border: "1px solid white", width: "4vw" }} />
                </Title> */}
              <Left
                data-scroll
                data-scroll-sticky
                //  data-scroll-target="#fixed-target"
              >
                <div className="details">
                  <div>Phone : </div>
                  <div>Email : Info@artforunity.co</div>
                  <div>Address : </div>
                </div>
              </Left>
              <Right
                data-scroll
                data-scroll-sticky
                //  data-scroll-target="#fixed-target"
              >
          
                  <form onSubmit={handleSubmit}>
                  <div className="contactForm">
                    <div className="heading">
                      <h1>Contact Us</h1>
                      <p style={{fontSize:"16px"}}>We are available to answere all your questions</p>
                    </div>
          
                      <div className="">
                        <div>Name <span style={{color:'red'}}>*</span></div>
                        <input
                          type="text"
                          // onBlur={(e) => {
                          //   const name = e?.target?.value;
                          //   if (!validate(name)) {
                          //     alert("Please enter valid name");
                          //   }
                          // }}
                          name="name"
                          required
                          onChange={(e) => handleEvent(e)}
                        />
                      </div>
                      <div className="">
                        <div>Email <span style={{color:'red'}}>*</span></div>
                        <input
                          type="email"
                          // onBlur={(e) => {
                          //   const name = e?.target?.value;
                          //   if (!validatEmail(name)) {
                          //     alert("Please enter valid email");
                          //   }
                          // }}
                          onChange={(e) => handleEvent(e)}
                          name="email"
                          required
                        />
                      </div>
                      <div className="">
                        <div>Message</div>
                        <textarea
                        rows={6}
                          type="text"
                          onChange={(e) => handleEvent(e)}
                          name="message"
                        />
                      </div>
                      <div className="submitButton">
                      <button type="submit">Send</button>
                      </div>
                    
                 
                </div>

                  </form>
              </Right>
            </SectionRight>

            <Footer />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Contact;
