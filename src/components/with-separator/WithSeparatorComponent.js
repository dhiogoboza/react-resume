import React from 'react'

class WithSeparatorComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSeparator = () => {
    if (!this.props.lastLine) {
      return <hr />;
    } else {
      return <br />;
    }
  }
}

export default WithSeparatorComponent