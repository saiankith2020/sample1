import React from 'react'
import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
        <div>
        <h1><center>Naresh Technologies</center></h1>
        <ul class="nav nav-tabs">
  <li class="nav-item">
  <Link to="/home">Home</Link>
  </li>
  <li class="nav-item">
  <Link to="/Profile">Proe</Link>
  </li>
  <li class="nav-item">
  <Link to="/Post">Post</Link>
  </li>
  
</ul>
</div>
    )
}

export default Header;