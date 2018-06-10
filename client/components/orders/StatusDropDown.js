import React, {Component } from 'react';
import { connect } from 'react-redux';

const statuses = ['Completed', 'Cancelled', 'Created', 'Processing']

export class StatusDropDown extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div className='dropDown'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        > Update Order StatusDropDown
        </button>
        <div className='dropdown-menu'
        aria-labelledby='dropdownMenuButton'>
          {}
      </div>
    )
  }
}
