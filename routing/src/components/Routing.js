import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from "./Home";
import Profile from './Profile';
import Post from './Post';
import PostDetails from './PostDetails';


const Routing=()=>{
    return(
        <div>
        
        
        <BrowserRouter>
        <Header/>
        
        
        <Route exact path ="/home" component={Home}/>
        <Route path="/Profile" component={Profile}/>
        <Route exact path="/Post" component={Post}/>
        <Route path="/post/:topic" component={PostDetails}/>
        </BrowserRouter>
        </div>
    )
}

/*class Routing extends Component{
    constructor(){
        super()
    }

render(){
    return(

<div>
<Header/>
<h1>you can start your wok here</h1>
 <Footer/>  
</div>
    )
 }*/




export default Routing;