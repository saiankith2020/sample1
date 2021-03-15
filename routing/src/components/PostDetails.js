import React from 'react'

const PostDetails = (props)=>{
  console.log(props)
    return(
        <h1>{props.match.params.topic}This is postdetails page{(props.location.search).split('=')[1]}</h1>
    )
}

export default PostDetails;