import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class FriendForm extends Component {
    
        state = {
            friend: this.props.activeFriend || {
                name: '',
                age: '',
                email: ''
           // id put in state is actually being assigned on the backend,
           // so it has been refactored out to be DRY-er     
            },
            active: false
        }

    componentDidUpdate(prevProps) {
        if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
            this.setState({ friend: this.props.activeFriend, active: true })
        }
    }

    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value} }))
    }
    // friend object coming into updateFriend and addFriend is being brought in through state;
    // Not necessary to pass in friend object to submitHandler
    submitHandler = (e) => {
        if (this.state.active) {
            this.props.updateFriend(e, this.state.friend)
        } else {
            this.props.addFriend(e, this.state.friend)
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
            }, active: false
        })
    }

    render() {
        return(
            <div>
                <NavLink to='/'>Home</NavLink>
                <form onSubmit={this.submitHandler}>
                    <input name="name" value={this.state.friend.name} type='text' placeholder='Name' onChange={this.changeHandler} required />
                    <input name='age' value={this.state.friend.age} type='number' placeholder='Age' onChange={this.changeHandler} required />
                    <input name='email' value={this.state.friend.email} type='email' placeholder='E-mail' onChange={this.changeHandler} required />
                    <button>{`${this.state.active ? 'Update' : 'Add Friend'}`}</button>
                </form>
            </div>
        )
    }
}