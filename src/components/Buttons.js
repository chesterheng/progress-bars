import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateBar } from '../actions';
import './Buttons.css';

class Buttons extends Component {

  handleOnClick = value => {
    const { updateBar, limit } = this.props;
    updateBar(Math.round(value / limit * 100));
  }
  
  render() {
    const { buttons } = this.props;
    return buttons.map((value, index) => 
      <Button 
        key={index} 
        color="primary"
        onClick={() => this.handleOnClick(value)}>{value}
      </Button>
    );
  };
}

const mapStateToProps = state => ({
  buttons: state.buttons,
  limit: state.limit
})

export default connect(
  mapStateToProps,
  { updateBar }
)(Buttons);