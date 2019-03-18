import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { readData } from '../actions';
import './App.css';
import ProgressBars from './ProgressBars';
import Dropdown from './Dropdown';
import Buttons from './Buttons';

class App extends Component {
  
  componentDidMount () {
    this.props.readData();
  }

  render(){
    return (
      <Container>
        <h2>Progress Bars</h2>
        <ProgressBars />
        <div className="control">
          <Dropdown />
          <Buttons />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { readData }
)(App);