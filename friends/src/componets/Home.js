import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Home() {
    return(
    <div>
     <h1>Friends List </h1>
     <NavLink to='/friends-list'>View Friends</NavLink>
    </div>
    )
}