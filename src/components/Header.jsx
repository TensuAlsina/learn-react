import React from 'react'

function Header(props) {
    const isTrue = false
  return (
    <div className='font-bold text-5xl'>
        <h1>Task Tracker</h1>
        <h2 className={isTrue ? 'm-10' : 'm-2'}>{props.name}</h2>
    </div>
  )
}

export default Header