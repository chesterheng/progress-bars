import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { connect } from 'react-redux';
import { selectBar } from '../actions';
import './Dropdown.css';

class Dropdown extends Component {

  renderOptions() {
    const { keys } = this.props;
    return keys.map((value) => 
      <option 
        key={value} 
        label={`Progress#${value+1}`}>{value}
      </option>);
  }

  handleOnChange = event => {
    this.props.selectBar(parseInt(event.target.value));
  }

  render() {
    return (
      <Input 
        onChange={this.handleOnChange}
        type="select" 
        name="select" 
        id="progressSelect">
        {this.renderOptions()}
      </Input>
    );
  }
};

const mapStateToProps = state => ({
  keys: [...state.bars.keys()] 
});

export default connect(
  mapStateToProps,
  { selectBar }
)(Dropdown);