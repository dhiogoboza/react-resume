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
    return this.dataProvider.getSocialNetworks().map((el, index) => {
      return <SocialNetworkComponent socialNetwork={el} key={index} />;
    });
  }

  render() {
    return <footer className="w3-container w3-theme w3-center w3-margin-top">
        <p>Find me on social media.</p>
        { this.socialNetworks() }
        <p>Template powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        <p>Source available at <a href="https://github.com/dhiogoboza/react-resume" target="_blank">dhiogoboza/react-resume</a></p>
    </footer>
  }
}

export default Footer