import React from 'react';
import styles from './card.module.css';

const Card = ({card}) => {
  return(
    <table>
        <thead>
          <tr >
            <th>{card.name}</th>
            <th>workplace</th>
            <th>Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colspan = '1'>job</th>
            <th colspan = '2'>email</th>
          </tr>
        </tbody>
        <tbody>
          <tr>1</tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan = '1'>name</th>
            <th colspan = '2'>Delete</th>
          </tr>
        </tfoot>
      </table>
  );
};

export default Card;