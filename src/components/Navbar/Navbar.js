


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import navImage from "../../Images/logodetalle.png"    ;
import Image from "react-bootstrap/Image";  
import './navbar.scss'


const styleSheet = {
  list : {
    width : 200,
    color: "white",
    height:"auto"
  },
  padding : {
    paddingRight :8,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : '#2c2c2c',
    cursor : "pointer",
  },

  navbarcolor :{
    backgroundColor:"#FFFFFF",
  height: "90x",
zIndex:"50"}
}

const StyledLink = withStyles({
  root: {
    color: '#2c2c2c',

    transform:"1s background-color",
    '&:hover' :{  
      color: "#42f934",
      textDecoration:"none",
      

    },     

   
  },
  label: {
    textTransform: 'capitalize',
  },
})(Link);


class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div styles={{zIndex:"3999"}}>
        <AppBar className= {this.props.classes.navbarcolor} >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />
                        <Image alt="Remy Sharp" src={navImage} height="40px" />

                  <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider> <StyledLink href="/">HOME</StyledLink></ListItem>
               <ListItem key = {2} button divider> <StyledLink href="/vooduplo">VOO DUPLO</StyledLink> </ListItem>
               <ListItem key = {3} button divider> <StyledLink href="/curso">CURSO</StyledLink> </ListItem>
               <ListItem key = {4} button divider> <StyledLink href="/cartaopresente">CART??O PRESENTE</StyledLink> </ListItem>
               <ListItem key = {5} button divider> <StyledLink href="/aula">AULA EXPERIMENTAL</StyledLink> </ListItem>
               <ListItem key = {6} button divider> <StyledLink href="/about">CONTATO</StyledLink> </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
      const {classes} = this.props
      return (
      <div>
      <AppBar className={this.props.classes.navbarcolor}>
        <Toolbar>
        <span id="marginspan"><Image alt="Remy Sharp" height="80px" src={navImage}/></span>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" ></Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <StyledLink href="/" >HOME</StyledLink>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <StyledLink href="/vooduplo" >VOO DUPLO</StyledLink>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <StyledLink href="/curso" >CURSO</StyledLink>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
             <StyledLink href="/cartaopresente" >CART??O PRESENTE</StyledLink>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
             <StyledLink href="/aula">AULA EXPERIMENTAL</StyledLink>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
             <StyledLink href="/about" >CONTATO</StyledLink>
            </Typography>
        </Toolbar>
      </AppBar>
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);



