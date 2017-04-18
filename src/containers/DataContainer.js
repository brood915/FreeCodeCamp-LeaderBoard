import React from 'react';
import 'whatwg-fetch';
import Data from '../components/Data';
import styles from '../style/main.scss';

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      type: 'recent'
    }
  }

  getData() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/' + this.state.type).then((response) =>
      response.json()
    ).then((json) => {
      this.setState({
        users: json
      })
    }).catch(function() {
    console.log('request failed')});
  }

  clickHandler(e) {
    this.setState({
      type: e.target.getAttribute('value')
    }, () => this.getData());
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    return (<div className = {styles.bodyContainer}>
        <h3>Leaderboard</h3>
      <Data users = {this.state.users} type = {this.state.type} activate = {this.clickHandler.bind(this)}/></div>);
  }
}

export default DataContainer;