import React from 'react';
import './LeftColumn.scss';
import { Helmet } from "react-helmet";
import { DataProvider } from '../../providers/DataProvider';
import LanguageComponent from '../language/LanguageComponent';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider();
    this.userInfo = this.dataProvider.getUserInfo();
  }

  languages = () => {
    return this.dataProvider.getLanguages().map((el, index) => {
      return <LanguageComponent language={el} key={index} />;
    });
  }

  render() {
    return <div className="w3-quarter">
      <Helmet>
          <title>{ this.userInfo.name }</title>
      </Helmet>

      <div className="w3-card-4 w3-theme-l1">
        <div className="w3-display-container">
          <img src="img/perfil.jpeg" style={{width:"100%"}} alt="Avatar" />
          <div className="w3-display-bottomleft w3-container w3-text-white">
            <h2>{ this.userInfo.name }</h2>
          </div>
        </div>
        <div className="w3-container">
          <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large"></i>{ this.userInfo.title }</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-large"></i>{ this.userInfo.location }</p>
          <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large"></i>{ this.userInfo.email }</p>
          <p><i className="fa fa-phone fa-fw w3-margin-right w3-large"></i>{ this.userInfo.phoneNumber }</p>
          <hr />

          <p className="w3-large"><b><i className="fa fa-globe fa-fw w3-margin-right"></i>Languages</b></p>
          { this.languages() }
          <br />
        </div>
      </div>
      <br />
    </div>
  };
}

export default LeftColumn