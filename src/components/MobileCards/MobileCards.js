import React from "react";
import "./mobilecards.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image1 from '../../Images/vooduplo2.jpg';
import Image from "react-bootstrap/Image";
import image2 from '../../Images/cursoparapente.jpg';
import image3 from '../../Images/regalar.jpg';
import {Button, Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const StyledButtonProd = withStyles({
    root: {
        backgroundColor: "transparent",
        borderRadius: 3,
        border: "1px solid #0ed600 ",
        color: '#0ed600', 
      height: 40,
      padding: '0px 30px',
      marginTop:'10px',
      float:"rigth",
        
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop: "10px"
    },
    media: {
      height: 140,
    },
  });


const ProductCards = () => {

    const classes = useStyles();

    return (
        <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
              image={image1}
              title="vooduplo"
            />
            <CardContent>
              <div className= "mobile_prodtittle">
              VOODUPLO
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
              Voa acompanhado por um instrutor habilitado!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <StyledButtonProd>Saber Mas</StyledButtonProd>
           
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
              image={image2}
              title="curso"
            />
            <CardContent>
            <div className= "mobile_prodtittle">
            CURSO PARAPENTE
            </div>
              <Typography variant="body2" color="textSecondary" component="p">
              Curso tem duração em média de 40 horas
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <StyledButtonProd>Saber Mas</StyledButtonProd>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
            className={classes.media}
              image={image3}
              title="carton_regalo"
            />
            <CardContent>
            <div className= "mobile_prodtittle">
            CARTON REGALO 
            </div>
              <Typography variant="body2" color="textSecondary" component="p">
              Compra un voo para tu amigo!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <StyledButtonProd>Saber Mas</StyledButtonProd>
          </CardActions>
        </Card>
      
        </div>
   /* { <div className  = "mobile_cardContainer">
    <div className="mobile_card transition">
        <h2 >VOODUPLO<br/><small> Voa acompanhado por um instrutor habilitado! </small></h2>
        <div className="mobile_cta-container"><Link href="/vooduplo" ><StyledButtonProd>Button</StyledButtonProd></Link></div>
        <div className="mobile_card_circle circle1"><Image src={image1} roundedCircle /></div>
    </div>
    <div className="mobile_card transition">
        <h2 className="transition">CURSO PARAPENTE<br/><small>Curso tem duração em média de 40 horas</small></h2>
        <div className="mobile_cta-container"><Link href="/curso" ><StyledButtonProd>Button</StyledButtonProd></Link></div>
        <div className="mobile_card_circle circle2" ><Image src={image2} roundedCircle /></div>
    </div>          
    <div className="mobile_card transition">
        <h2 className="transition">REGALAR<br/><small>Compra un voo para tu amigo!</small></h2>
        <div className="mobile_cta-container"><Link href="/regalar" ><StyledButtonProd>Button</StyledButtonProd></Link></div>
        <div className="mobile_card_circle circle3" ><Image src={image3} roundedCircle /></div>
    </div>
    </div>} */
)
} 

export default ProductCards