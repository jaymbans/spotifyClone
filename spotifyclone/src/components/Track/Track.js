import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

export class Track extends React.Component {
  renderAction() {
    let renderbutton;
    if (this.props.isRemoval) {
      renderbutton = <button className="Track-action">-</button>
    } else {
      renderbutton = <button className="Track-action">+</button>
    }
    return renderbutton;
  }

  addTrack() {

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} </p>
        </div>
        {this.renderAction()}
      </div>

    )
  }
}