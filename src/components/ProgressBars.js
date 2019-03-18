import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { connect } from 'react-redux';
import './ProgressBars.css';

class ProgressBars extends Component {
  render () {
    const { bars } = this.props;
    return bars.map((value, index) => 
      <Progress 
        key={index} 
        value={value}
        color={value > 100 ? 'danger' : 'primary'}>{value}%
      </Progress>
    );
  }
}

const mapStateToProps = state => ({
  bars: state.bars
});

export default connect(
  mapStateToProps
)(ProgressBars);