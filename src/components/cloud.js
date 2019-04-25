// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import React from 'react'

export default class Cloud extends React.Component {


  componentDidMount(){
    fetch(`https://api.cloudinary.com/v1_1/dxjktshlo`)
    .then(console.log)
  }

  render() {
    return (
      <div></div>
    )
  }
}
