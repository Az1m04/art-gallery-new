import React from "react";
import "./SliderSection.css";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ReactTooltip from "react-tooltip";

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

  #disclamier{
    max-width:50%;
    text-align:left;
    padding:0.5rem;
    background-color:rgb(49,48,45);
  }
  @media (max-width: 48em) {
    width: 100%;
    #disclamier{
      width:100% !important;
      
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
        <img data-scroll data-scroll-speed="1" src={Logo} alt="Company Name" />
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
          <br/>
           Bhoomija Services
           <br/>
                  <span data-tip data-for="disclamier">
                  DISCLAIMER
                  </span>

           <ReactTooltip id="disclamier" place="top" effect="solid">
       
         <p style={{fontSize:'16px'}}>DISCLAIMER</p>
            <br/>
              The information contained in this Website is provided for informational purposes only, solely on the basis that users will be responsible for making their own assessment of the information shared herein and are advised to verify all relevant representations, statements and information.
                <br/>Every effort has been made to offer the most current, correct, and clearly expressed information possible in our web site. Nevertheless, inadvertent errors in information may occur. In particular but without limitation, the Unison World School (UWS) disclaims any responsibility for typographical errors and accuracy of the information that may be contained on its web pages. The information and data included are subject to change without notice. The services, information, and data made available on the UWS website are provided "as is" without warranties of any kind. UWS does take responsibility to correct an error, within our abilities, when brought to our attention. 
                <br/> Some links within the Website may lead to other web-sites, including those operated and maintained by third parties. UWS includes these links solely as a convenience to you, and the presence of such a link does not imply a responsibility for the linked site or an endorsement of the linked site, its operator, or its contents.
                <br/> UWS does not represent or warrant that any content/files obtained from or through this Site or a Linked Site are free from computer viruses or other defects. UWS accepts no liability for the presence of computer viruses or other defects.
                <br/> UWS may use images from web searches for banners and promotional materials.  These images are credited here to the best of our ability. 
                <br/>Stock photographs for the link 'JOIN US' come from  http://freepik.com

         
							
      </ReactTooltip>
        </p>
      </FooterComponent>
    </Section>
  );
};


export default Footer;
