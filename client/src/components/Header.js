import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './streams/GoogleAuth';

export default function Header() {
  return (
    <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>
            Twatch
        </Link>
        <div className='right menu'>
            <Link to='/' className='item'>
                All Streams
            </Link>
            <GoogleAuth />
        </div>
    </div>
  )
}
