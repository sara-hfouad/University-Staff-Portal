import React from 'react'
import '../styling/App.css'
import { Link } from 'react-router-dom'

export default function ManageSlots() {
    return (
        <>
            <div className='App'>
                <h1>Coordinator Homepage</h1>
            </div>
            <ul className='link_list'>
                <Link className='a' to='/coordinator/addSlot'>
                    <li> Add Slot </li>
                </Link>
              

            </ul>

        </>

    )
}