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
import image2 from '../../Images/cursoparapente.jpg';
import image3 from '../../Images/regalar.jpg';
import {Button, Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



const StyledButtonProd = withStyles({
    root: {
        backgroundColor: "transparent",
        borderRadius: 3,
        border: "1px solid #2c2c2c ",
        color: '#2c2c2c', 
        fontFamily:"Montserrat",
      height: 40,
      padding: '0px 30px',
      marginTop:'10px',
      minWidth:"90%"
        
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const useStyles = makeStyles({
    root: {
      width: "100%",
      marginLeft:"auto",
      marginRight:"auto",
      marginTop: "10px",
      
    },
    media: {
      height: 140,
    },
  });


const ProductCards = () => {

    const classes = useStyles();

    return (
        <div className ="mobileCardContainer">
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
              Voo acompanhado por um instrutor habilitado.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           <div className="card_btn"> <Link href="/vooduplo"><StyledButtonProd>SABER MAIS</StyledButtonProd></Link></div>
           
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
              Reconhecido pela Confederação Brasileira de Voo Livre (C.B.V.L.)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div className="card_btn"><Link href="/curso"><StyledButtonProd>SABER MAIS</StyledButtonProd></Link></div>
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
            CARTÃO PRESENTE
            </div>
              <Typography variant="body2" color="textSecondary" component="p">
              Presenteie alguém especial com um voo inesquecível!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div className="card_btn"><Link href="/regalar"><StyledButtonProd>SABER MAIS</StyledButtonProd></Link></div>
          </CardActions>
        </Card>
      
        </div>
  
)
} 

export default ProductCards