


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, Link, Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import navImage from '../../Images/faviconOvni.png';
import zIndex from '@material-ui/core/styles/zIndex';

const styleSheet = {
  list : {
    width : 200,
    color: "white",
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },

  navbarcolor :{
    backgroundColor:"#42f934",
  height: "80x",
zIndex:"50"}
}

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
                        <Avatar alt="Remy Sharp" src={navImage} className={this.props.classes.large} />

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
               <ListItem key = {1} button divider> <Link href="/">HOME</Link></ListItem>
               <ListItem key = {2} button divider> <Link href="/vooduplo">VOO DUPLO</Link> </ListItem>
               <ListItem key = {3} button divider> <Link href="/curso">CURSO</Link> </ListItem>
               <ListItem key = {4} button divider> <Link href="/regalar">REGALAR</Link> </ListItem>
               <ListItem key = {5} button divider> <Link href="/about">QUEM SOMOS</Link> </ListItem>
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
      <AppBar className={this.props.classes.navbarcolor}>
        <Toolbar>
        <Avatar alt="Remy Sharp" src={navImage} className={classes.large} />
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" ></Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <Link href="/" >HOME</Link>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <Link href="/vooduplo" >VOO DUPLO</Link>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
              <Link href="/curso" >CURSO</Link>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
             <Link href="/regalar" >REGALAR</Link>
            </Typography>
            <Typography variant = "subheading" className = {classes.padding} color="inherit" >
             <Link href="/about" >QUEM SOMOS</Link>
            </Typography>
        </Toolbar>
      </AppBar>
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



