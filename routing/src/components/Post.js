import React from 'react';
import {Link} from "react-router-dom";

const Post = ()=>{
    return(
        <div>
            <h1>This is post page ankith</h1>
            <h1>React</h1>
            <Link to ="/post/node?pageno=1">details</Link>
            <h3>Javascript</h3>
            <Link to="/post/javascript/page no=2">details2</Link>
            <h3>Node</h3>
            <Link to="/post/node/page number=3">details3</Link>
    
        </div>
       
    )
}

export default Post;