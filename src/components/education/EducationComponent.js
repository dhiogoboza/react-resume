import React from 'react'
import WithSeparatorComponent from '../with-separator/WithSeparatorComponent';
import './EducationComponent.scss';

class EducationComponent extends WithSeparatorComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="w3-container">
      <div className="w3-container no-padding-left">
        <div className="w3-col-auto w3-container no-padding-left">
          <img src={ this.props.education.img } alt={ this.props.education.place }
            className="w3-round company-logo" />
        </div>
        <div className="col-right">
          <h5 className="w3-text-light-gray no-margin-top"> { this.props.education.title } /&nbsp;
            <a href={ this.props.education.site } target="_blank">{ this.props.education.place }</a>
          </h5>
          <h6><i className="fa fa-calendar fa-fw w3-margin-right"></i>{ this.props.education.begin }
            &nbsp;-&nbsp;{this.props.education.current ? (
              <span className="w3-tag w3-teal w3-round">Current</span>
            ) : (
              this.props.education.end
            )}
          </h6>
          <p>{ this.props.education.description }</p>
        </div>
      </div>
      { this.renderSeparator() }
    </div>
  }
}

export default EducationComponent