import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/main.scss';

function Data(props) {
    let count = 0;
    return (<table>
      <tbody>
        <tr>
          <th className={styles.left}>#</th>
          <th className={styles.left}>Name</th>
          <th value = 'recent' className = {props.type === 'recent' ? styles.activated : ''} onClick = {props.activate}>Points in the Last 30 Days</th>
          <th value = "alltime" className = {props.type === 'alltime' ? styles.activated : ''} onClick = {props.activate}>Total Points</th>
        </tr>
        {props.users.map(function(each) 
       { count++; return (<tr key = {count.toString()}>
        <td className={styles.left}>{count}</td>
                                <td className={styles.left}><a target="_blank" href={'https://www.freecodecamp.com/' + each.username}><img src={each.img}/><span>{each.username}</span></a></td><td>{each.recent}</td>
                                <td>{each.alltime}</td>
       </tr>);})}
       </tbody>
      </table>);
}

Data.propTypes = {
  type: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  activate: PropTypes.func.isRequired
}

export default Data;