import React from 'react'
import './RightColumn.scss';
import { DataProvider } from '../../providers/DataProvider';
import ExperienceComponent from '../experience/ExperienceComponent';
import EducationComponent from '../education/EducationComponent';

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
    this.dataProvider = new DataProvider();
  }

  experiences = () => {
    const experiencesArray = this.dataProvider.getExperiences();
    const lastIndex = experiencesArray.length - 1;
    return experiencesArray.map((el, index) => {
      return <ExperienceComponent experience={el} key={index} lastLine={index === lastIndex} />;
    });
  }

  education = () => {
    const educationArray = this.dataProvider.getEducation();
    const lastIndex = educationArray.length - 1;
    return educationArray.map((el, index) => {
      return <EducationComponent education={el} key={index} lastLine={index === lastIndex} />
    });
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
        { this.education() }
      </div>
    </div>
  }
}

export default RightColumn