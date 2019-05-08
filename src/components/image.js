import React from 'react'
import { Image } from 'semantic-ui-react'
import TrackVisibility from 'react-on-screen'
import VisibilitySensor from 'react-visibility-sensor'
import Popup from 'reactjs-popup'
import ImageZoom from './imageZoom'
import store from '../index'



class thisImage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      onScreen: true,
      count: 1,
      style: {
        maxHeight: '100%',
        maxWidth: '100%',
        paddingBottom: '17px',
        opacity: '0',
        transition: 'opacity 200ms ease-in-out'
      }
    }
  }

  contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
  };

  handleClick = (e) => {
    store.dispatch({
      type: "ZOOM",
      action: {
        zoom: true
      }
    })
  }


  onChange = (isVisible) => {
      if (!this.state.onScreen || this.state.count == 1) {
        this.setState(() => (
          {
            onScreen: isVisible,
            count: 2,
            style: {
              ...this.state.style,
              opacity: isVisible ? '1' : '0'
            }
          }
        ))
      }
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <VisibilitySensor onChange={this.onChange} offset={{bottom:-100}}>
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={this.contentStyle}
            closeOnDocumentClick={true}
            trigger={open =>
              <img
                className={'photoImage'}
                id={this.props.i}
                src={this.props.image}
                style={this.state.style}
              />}
            >
            {close => <ImageZoom close={close} src={this.props.image} />}
          </Popup>
        </VisibilitySensor>
      </div>
    )
  }
}

export default thisImage
