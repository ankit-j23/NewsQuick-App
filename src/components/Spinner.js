import React  from 'react'
import spinner from './spinner_img.gif'

export default function Spinner () {
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt="spinner-image"/>
      </div>
    )
}
