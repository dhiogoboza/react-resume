import React from 'react'
import './SocialNetworkComponent.scss';

class SocialNetworkComponent extends React.Component {
  render() {
    return <a target="_blank" href={this.props.socialNetwork.link} title={this.props.socialNetwork.name}>
      <i className={this.props.socialNetwork.icon + ' fa w3-hover-opacity'}></i>
    </a>
  }
}

export default SocialNetworkComponent