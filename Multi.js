import React from 'react';
import PropTypes from 'prop-types';
import About from './About';

class Multi extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.connectedAbout1 = props.stripes.connect(About, { dataKey: "1" });
    this.connectedAbout2 = props.stripes.connect(About, { dataKey: "2" });
  }

  render() {
    return (
      <div>
        <this.connectedAbout1 stripes={this.props.stripes} />
        <this.connectedAbout2 stripes={this.props.stripes} />
      </div>
    );
  }
}

export default Multi;
