import React from 'react'
import Friend from './Friend'

export default function FriendsList(props){
    console.log(props);
    return (
        <>
        
        {props.friends.map(friend => <Friend friend={friend} key={friend.id} setUpdateForm={props.setUpdateForm} deleteFriend={props.deleteFriend} /> )}
        </>
    )
}