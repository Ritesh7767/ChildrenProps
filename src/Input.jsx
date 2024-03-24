import React from 'react'
import './Input.css'
const Input = ({images, setImages}) => {

    const handleChange = event => {
        setImages(event.target.value)
    }
     return (
        <div className='navbar'>
            <input type="number" placeholder='Enter number' onChange={e => handleChange(e)}/>
        </div>
    )
}

export default Input