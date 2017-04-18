import React from 'react';
import PropTypes from 'prop-types';

function Data(props) {
    let count = 0;
    return (<table>
      <tbody>
        <tr>
          <th className="left">#</th>
          <th className="left">Name</th>
          <th value = 'recent' className = {props.type === 'recent' ? 'activated' : ''} onClick = {props.activate}>Points in the Last 30 Days</th>
          <th value = "alltime" className = {props.type === 'alltime' ? 'activated' : ''} onClick = {props.activate}>Total Points</th>
        </tr>
        {props.users.map(function(each) 
       { count++; return (<tr key = {count.toString()}>
        <td className="left">{count}</td>
                                <td className="left"><a target="_blank" href={'https://www.freecodecamp.com/' + each.username}><img src={each.img}/><span>{each.username}</span></a></td><td>{each.recent}</td>
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