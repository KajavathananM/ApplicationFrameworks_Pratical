import React,{Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

export  default class  Users extends Component{
    static  get propTypes(){
        return{
            users:PropTypes.array
        }
    }
    constructor(props){
        super(props);
    }
    render(){
        const {users}=this.props;
        return <div>
            <thead>
            <tr>
                <th>ID</th>
                <th>Names</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user => {
                    return <User key={user.id} user={user}/>
                })
            }
            </tbody>
        </div>
    }
}