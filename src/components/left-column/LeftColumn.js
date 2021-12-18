import React from 'react';
import './LeftColumn.scss';
import { DataProvider } from '../../providers/DataProvider';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    const dataProvider = new DataProvider();
    this.userInfo = dataProvider.getUserInfo();
  }

  render() {
    return <div className="w3-quarter">
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

          <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right"></i>Skills</b></p>
          <p>Adobe Photoshop</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"90%"}}>90%</div>
          </div>
          <p>Photography</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"80%"}}>
              <div className="w3-center w3-text-white">80%</div>
            </div>
          </div>
          <p>Illustrator</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>75%</div>
          </div>
          <p>Media</p>
          <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"50%"}}>50%</div>
          </div>
          <br />

          <p className="w3-large"><b><i className="fa fa-globe fa-fw w3-margin-right"></i>Languages</b></p>
          <p>Portuguese</p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height: "24px", width: "100%"}}></div>
          </div>
          <p><a href="https://www.efset.org/cert/Tp1Hmm" target="_blank">English</a></p>
          <div className="w3-light-grey w3-round-xlarge">
            <div className="w3-round-xlarge w3-teal" style={{height:"24px", width: "67%"}}></div>
          </div>
          <br />
        </div>
      </div><br />
    </div>
  };
}

export default LeftColumn