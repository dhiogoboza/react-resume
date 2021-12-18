import React from 'react'
import './ExperienceComponent.scss';
import { ColorUtilities } from '../../utilities/ColorUtilities';

class ExperienceComponent extends React.Component {
  techs = () => {
    let result = [];
    let techs = this.props.experience.techs;
    let index = 0;

    for (let tech of techs) {
      result.push(<span key={ index } className={ 'w3-tag w3-round '+ ColorUtilities.getTechClass(tech) }>{ tech }</span>);
      index++;
    }

    return result;
  }

  render() {
    return <div className="w3-container">
      <div className="w3-container no-padding-left">
        <div className="w3-col-auto w3-container no-padding-left">
          <img src={ this.props.experience.company.img } alt={ this.props.experience.company.name }
            className="w3-round company-logo" />
        </div>
        <div className="col-right">
          <h5 className="w3-text-light-gray no-margin-top">{ this.props.experience.role } /&nbsp;
            <a href={ this.props.experience.company.site }
              target="_blank">{ this.props.experience.company.name }</a>
          </h5>
          <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>{ this.props.experience.begin }
          &nbsp;-&nbsp;{this.props.experience.current ? (
              <span className="w3-tag w3-teal w3-round">Current</span>
          ) : (
              this.props.experience.end
            )}
          </h6>
          <p className="tecnologies">
            { this.techs() }
          </p>
          <p>{ this.props.experience.description }</p>
        </div>
      </div>
      <hr />
    </div>
  }
}

export default ExperienceComponent