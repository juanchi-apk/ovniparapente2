import React from "react";
import "./home.scss";
import Image from "react-bootstrap/Image";
import { Button, Link } from "@material-ui/core";
import Image1 from "../../Images/slide1.jpg";
import Image2 from "../../Images/slide2.jpg";
import Image3 from "../../Images/slide3.jpg";
import Image4 from "../../Images/slide4.jpg";
import Image5 from "../../Images/slide5.jpg";
import InstImage from "../../Images/faviconOvni.png"
import { withStyles } from '@material-ui/core/styles';
import ImageGallery from "../ImageGallery/ImageGallery";
import ContactForm from "../ContactForm/ContactForm";
import MobileCards from "../MobileCards/MobileCards";
import ProductCards from "../Cards/Cards";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Faq from "../Faq/Faq";
import { useMedia } from 'react-use';
import CBVL_logo from '../../Images/logo_cbvl.png';
import Testimonials from '../Testimonials/Testimonials';
import Ovnicarrousel from "../../fragments/Ovnicarrousel";
import Location from '../Location/Location';










const Home = () => {

  const isWide = useMedia('(min-width: 600px)');
  const isMobile = useMedia('(max-width: 599px)');

  const items = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ]

  const StyledButtoninst = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "2px solid #2c2c2c ",
      color: '#2c2c2c',
      fontWeight: "700",
      fontFamily: "Montserrat",
      height: 48,
      padding: '0 30px',
      marginTop: '50px',

      '&:hover': {
        textDecoration: "none",
        color: "#42f934",
        border: "2px solid #42f934 ",

      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const MobileStyledButtoninst = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "1px solid #2c2c2c ",
      color: '#2c2c2c',
      height: 30,
      marginTop: '50px',
      fontFamily:"Montserrat",

    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);



  const StyledLink = withStyles({
    root: {
      background: 'transparent',
      color: 'rgb(224, 224, 224)',
      height: 48,
      padding: '0 30px',
      marginTop: '50px',
      '&:hover': {
        color: "#42f934",

      },


    },
    label: {
      textTransform: 'capitalize',
    },
  })(Link);

  return (
    <div>
      {isWide && (
        <div>

          <section>
            <div className="carousel">
              <div className="instBanner">
                <h1 className="instBanner_tittle">OVNI PARAPENTE</h1>
                <h2 className="instBanner_subtittle" >FLORIPA</h2>
                <p className="instBanner_phrase">Realizando Sohnos desde 1994</p>
                <div className="instBanner_social">
                  <StyledLink href="https://www.facebook.com/ovniparapente/" target="_blank"><FacebookIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
                  <StyledLink href="https://www.instagram.com/ovniparapenteoficial/" target="_blank" ><InstagramIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
                  <StyledLink href="https://www.youtube.com/channel/UC8Dh9C_NI5boCxO5NLik0vQ/" target="_blank"   ><YouTubeIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
                </div>
              </div>
              <Ovnicarrousel items={items}></Ovnicarrousel>


            </div>
          </section>
          <section>
            <div className="inst">
              <div className="institem">
                <h1 className="inst_tittle">O.V.N.I. ESCOLA DE PARAPENTE</h1>

                <div className="inst_text">
                  Temos mais de 25 anos de experiência em VOO DUPLO INSTRUCIONAL, PARAMOTOR, CURSOS, propaganda aérea e venda equipamentos.
                  Com mais de 20.000 voos duplos realizados e centenas de alunos formados ao redor do mundo, hoje a O.V.N.I. ESCOLA DE PARAPENTE é uma grande família
                  Somos apaixonados por voo, pioneiros na modalidade e realizadores de sonhos. Amamos adrenalina e queremos levar essa sensação até você.

                </div>
                <Image src={CBVL_logo} roundedCircle />
                <div>
                  <Link style={{ textDecoration: "none" }} href="/about" ><StyledButtoninst variant="outlined">SABER MAIS</StyledButtoninst></Link>
                </div>
              </div>

            </div>
          </section>
          <section>
            <ImageGallery></ImageGallery>
          </section>
          <section>
            <ContactForm></ContactForm>
          </section>
          <section>
            <div className="productCardContainer" >
              <ProductCards />
            </div>
          </section>
          <section>
          <div className="aulavirtual" id="aulacont">
            <div>AGENDE AGORA A SUA AULA EXPERIMENTAL GRATUITA! </div>
            <p>Nesta aula experimental você poderá esclarecer todas as dúvidas ou preocupações que aparecem na hora de escolher uma escola para se formar como piloto de Parapente.</p>
            <Link style={{ textDecoration: "none" }} href="https://landing.mailerlite.com/webforms/landing/e3t7o9" target="_blank"><StyledButtoninst>AULA EXPERIMENTAL</StyledButtoninst></Link>
          </div>
          </section>
          <section>

            <div className="testimonial_main_container">
              <Testimonials />
            </div>
          </section>
          <section>
            <Location />
          </section>
          <section>
            <Faq />
          </section>

        </div>
      )}
      {isMobile && (
        <div >
          <div className="mobile_carousel">
            
            <Ovnicarrousel items={items}></Ovnicarrousel>
          </div>
          <div className="mobile_inst">
            <div className="mobile_institem">
              <div style={{ width: "80%" }}>

                <Image src={InstImage} fluid />

              </div>
              <h1 className="mobile_inst_tittle">O.V.N.I. ESCOLA DE PARAPENTE</h1>

              <div className="mobile_inst_text">
                Temos mais de 25 anos de experiência em VOO DUPLO INSTRUCIONAL, PARAMOTOR, CURSOS, propaganda aérea e venda equipamentos.
                Com mais de 20.000 voos duplos realizados e centenas de alunos formados ao redor do mundo, hoje a O.V.N.I. ESCOLA DE PARAPENTE é uma grande família
                Somos apaixonados por voo, pioneiros na modalidade e realizadores de sonhos. Amamos adrenalina e queremos levar essa sensação até você.
              </div>
              <Image src={CBVL_logo} thumbnail />
              <div>
                <Link href="/about" ><MobileStyledButtoninst variant="outlined">SABER MAS</MobileStyledButtoninst></Link>
              </div>
            </div>

          </div>
          <div className="mobile_sliderform">
            <div className="sliderform_slider">

              <ImageGallery></ImageGallery>
            </div>
            <span id="mainform"><ContactForm /></span>
          </div>
          <div className="productCardContainer" >
            <MobileCards />

            <div className="mobile_aulavirtual" id="aulacont">
              <div>AGENDE AGORA A SUA AULA EXPERIMENTAL GRATUITA! </div>Nesta aula experimental você poderá esclarecer todas as dúvidas ou preocupações que aparecem na hora de escolher uma escola para se formar como piloto de Parapente.
              <p></p>
              <StyledLink href="https://landing.mailerlite.com/webforms/landing/e3t7o9" target="_blank"><MobileStyledButtoninst>AULA EXPERIMENTAL</MobileStyledButtoninst></StyledLink>
            </div>
          </div>
          <div className="testimonial_main_container">

            <Testimonials />

          </div>
          <Location />
          <Faq />
        </div>
      )}

    </div>)
};

export default Home;
