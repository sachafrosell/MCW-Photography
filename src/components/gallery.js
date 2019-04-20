import GridLayout from 'react-grid-layout'
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ImageZoom from 'react-medium-image-zoom'
import ThisImage from './image'
import TrackVisibility from 'react-on-screen'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import store from '../index'


class Gallery extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      style: {
        opacity: '1',
        transition: 'opacity 200ms ease-in-out'
      }
    }
  }

  targetRef = React.createRef();
  imageElements = [];
  targetElement = null;

  componentDidMount() {
    window.scrollTo(0, 0)
    document.addEventListener("keydown", this._handleKeyDown)
  }

  componentWillUpdate() {
    this.targetElement = this.targetRef.current;
    if (!this.props.zoom) {
      disableBodyScroll(this.targetElement);
    }
  }

  addImages = (i, images) => {
      clearAllBodyScrollLocks()
      return images[i].map((image, i) =>
        <Grid.Column key={i}>

          <ThisImage key={i} image={image} />

        </Grid.Column>)
  }

  calculateHowManyColumns = () => {
    let rArr = [];
    let images = Object.values(this.props.images)
    let numberOfImagesPerColumn = Math.round(images.length / 3)
    for(let i = 0; i < 3; i++) {
      rArr.push(images.splice(0, numberOfImagesPerColumn))
    }
    return rArr;
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  columnification = () => {
    let images = this.calculateHowManyColumns()
    return [1, 1, 1].map((column, i) => (
      <Grid.Column key={i} style={{'paddingLeft': '10px', 'paddingRight': '10px'}}>
        {this.addImages(i, images)}
      </Grid.Column>
    ))
  }

  render() {
    return (
      <div style={{'marginLeft': '50px', 'marginRight': '50px'}}>

        <Grid columns={3} style={this.state.style}>
          {this.columnification()}
        </Grid>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Gallery);
