import React from 'react'
import './LanguageComponent.scss';

class LanguageComponent extends React.Component {
  render() {
    return <div>
      <p><a href={this.props.language.certificate} target="_blank">{this.props.language.name}</a></p>
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-teal language-bar" style={{ width: this.props.language.percentage }}></div>
      </div>
    </div>
  }
}

export default LanguageComponent;