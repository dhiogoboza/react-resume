import React from 'react'
import './RightColumn.scss';
import { DataProvider } from '../../providers/DataProvider';
import ExperienceComponent from '../experience/ExperienceComponent';

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider();
  }

  experiences = () => {
    let result = [];
    let exps = this.dataProvider.getExperiences();
    let index = 0;

    for (let exp of exps) {
      result.push(<ExperienceComponent experience={exp} key={index} />);
      index++;
    }

    return result;
  }

  render() {
    return <div className="w3-threequarter">

      <div className="w3-container w3-card w3-margin-bottom w3-theme-l1">
        <h2 className="w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge"></i>Work
          Experience</h2>
        { this.experiences() }
      </div>

      <div className="w3-container w3-card w3-theme-l1">
        <h2 className="w3-padding-16"><i
          className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge"></i>Education</h2>

        <div className="w3-container">
          <div className="w3-container no-padding-left">
            <div className="w3-col-auto w3-container no-padding-left">
              <img src="img/ufrn.jpg" alt="Federal University of Rio Grande do Norte"
                title="Logo Federal University of Rio Grande do Norte"
                className="w3-round company-logo" />
            </div>
            <div className="col-right">
              <h5 className="w3-text-light-gray no-margin-top"> Computer Engineering /
                <a href="https://www.linkedin.com/school/ufrn/" target="_blank">Federal University
                  of Rio Grande do Norte</a>
              </h5>
              <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2016 - Dec 2021</h6>
              <p>Web developement, parallel programming, artificial inteligence, computer
                architecture, microcontrollers, database, networks.</p>
            </div>
          </div>
          <hr />
        </div>

        <div className="w3-container">
          <div className="w3-container no-padding-left">
            <div className="w3-col-auto w3-container no-padding-left">
              <img src="img/ufrn.jpg" alt="Federal University of Rio Grande do Norte"
                title="Logo Federal University of Rio Grande do Norte"
                className="w3-round company-logo" />
            </div>
            <div className="col-right">
              <h5 className="w3-text-light-gray no-margin-top"> Science and Tecnology /
                <a href="https://www.linkedin.com/school/ufrn/" target="_blank">Federal University
                  of Rio Grande do Norte</a>
              </h5>
              <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2012 - Dec 2015</h6>
              <p>Programming logic, C++.</p>
            </div>
          </div>
          <hr />
        </div>

        <div className="w3-container">
          <div className="w3-container no-padding-left">
            <div className="w3-col-auto w3-container no-padding-left">
              <img src="img/ufrn.jpg" alt="Federal University of Rio Grande do Norte"
                title="Logo Federal University of Rio Grande do Norte"
                className="w3-round company-logo" />
            </div>
            <div className="col-right">
              <h5 className="w3-text-light-gray no-margin-top"> Programming course /
                <a href="https://www.linkedin.com/school/ufrn/" target="_blank">Federal University
                  of Rio Grande do Norte</a>
              </h5>
              <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2010 - Dec 2011</h6>
              <p>Programming logic, software development, Java, database.</p>
            </div>
          </div>
          <hr />
        </div>

        <div className="w3-container">
          <div className="w3-container no-padding-left">
            <div className="w3-col-auto w3-container no-padding-left">
              <img src="img/ifrn.jpg" alt="Federal Institute of Rio Grande do Norte"
                title="Logo Federal Institute of Rio Grande do Norte"
                className="w3-round company-logo" />
            </div>
            <div className="col-right">
              <h5 className="w3-text-light-gray no-margin-top"> Programming course /
                <a href="https://www.linkedin.com/school/ufrn/" target="_blank">Federal Institute of
                  Rio Grande do Norte</a>
              </h5>
              <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2008 - Dec 2011</h6>
              <p>Programming logic, software development, database, .Net, Pascal, Delphi.</p>
            </div>
          </div>
          <hr />
        </div>

      </div>
    </div>
  }
}

export default RightColumn