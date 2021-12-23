import React from 'react'
import { DataProvider } from '../../providers/DataProvider';
import SocialNetworkComponent from '../socialnetwork/SocialNetworkComponent';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider();
  }

  socialNetworks = () => {
    let result = [];
    let socialNetworks = this.dataProvider.getSocialNetworks();
    let index = 0;

    for (let socialNetwork of socialNetworks) {
      result.push(<SocialNetworkComponent socialNetwork={socialNetwork} key={index} />);
      index++;
    }

    return result;
  }

  render() {
    return <footer className="w3-container w3-theme w3-center w3-margin-top">
        <p>Find me on social media.</p>
        { this.socialNetworks() }
        <p>Template powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </footer>
  }
}

export default Footer