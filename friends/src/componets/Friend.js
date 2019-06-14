import React from 'react'

export default function Friend(props) {
    return(
    <div>
        <h4>{props.friend.name}</h4>
        <p>{props.friend.age}</p>
        <p>{props.friend.email}</p>
        <button onClick={(e) => props.setUpdateForm(e, props.friend)} >Update</button>
        <button onClick={(e) => props.deleteFriend(e, props.friend.id)} >X</button>
    </div>
    )
}