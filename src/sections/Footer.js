import React, { useState } from "react";
import "./SliderSection.css";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
  /* background-color: yellow; */

  @media (max-width: 600px) {
    margin-top: -10rem !important;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
      img {
        width: 48vw;
        height: auto;
      }
    }
  }

  @media (max-width: 48em) {
    img {
      width: 48vw;
      height: auto;
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;
  position: relative;

  .tooltip {
    position: relative;
    display: inline-block;
    width: 100%;
    border-bottom: none !important;
  }

  .tooltip .tooltiptext {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    visibility: hidden;
    width: 100%;
    background-color: #282828;
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 1rem;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 30%;
  }
  .tooltip .tooltiptextLeft {
    visibility: hidden;
    width: 120px;
    background-color: #282828;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
  }
  .tooltip .tooltiptextLeft::after {
    content: "";
    position: absolute;

    top: 100%;
    left: 50%;
    margin-left: -44px;
    border-width: 5px;
    border-style: solid;
    border-color: #404040 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptextLeft {
    visibility: visible;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;

    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #404040 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .disclaimer {
    max-height: 40vh;
    width: 100%;
    overflow-y: scroll;
    margin-top: -50vh;
    border-radius: 10px;
    padding: 1rem;
    max-width: 50%;
    color: black;
    text-align: left;
    font-size: 18px;

    background-color: #fff;
  }
  .disclaimer > p {
    font-size: 1.5rem;
  }
  @media (max-width: 48em) {
    width: 100%;
    #disclamier {
      width: 100% !important;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const handleScroll = (id) => {
    let ele = document.querySelector(id);

    scroll.scrollTo(ele, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section id="info">
      <LogoContainer>
        <a href="/">
          <img
            data-scroll
            data-scroll-speed="1"
            src={Logo}
            alt="Company Name"
          />
          <h3 data-scroll data-scroll-speed="0">
            ART FOR UNITY
          </h3>
        </a>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
      >
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/teams">Our Team</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
          <li>
            {" "}
            <a href="/aboutus">about</a>
          </li>
          {/* <li onClick={() => handleScroll("#shop")}>shop</li> */}
          {/* <li onClick={() => handleScroll("#new-arrivals")}>art galllery</li> */}
          {/* <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li> */}
        </ul>
        <p className="change">
          {/* <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          > */}
          &copy; {new Date().getFullYear()} All Rights Reserved
          {/* </span> */}
          <br />
          Bhoomija Services
          <br />
          <div className="tooltip">
            <span className="disclaimer tooltiptext">
              <p>DISCLAIMER</p>
              <br />
              Please read this disclaimer ("disclaimer") carefully before using
              [website] website (“website”, "service") operated by [name] ("us",
              'we", "our"). The content displayed on the website is the
              intellectual property of the [name]. You may not reuse, republish,
              or reprint such content without our written consent. All
              information posted is merely for educational and informational
              purposes. It is not intended as a substitute for professional
              advice. Should you decide to act upon any information on this
              website, you do so at your own risk. While the information on this
              website has been verified to the best of our abilities, we cannot
              guarantee that there are no mistakes or errors. We reserve the
              right to change this policy at any given time, of which you will
              be promptly updated. If you want to make sure that you are up to
              date with the latest changes, we advise you to frequently visit
              this page.
            </span>
            DISCLAIMER
          </div>
        </p>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
