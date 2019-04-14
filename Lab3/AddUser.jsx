import React,{Component} from  'react';
import PropTypes from "prop-types";

export default class AddUser extends Component{
    static get propTypes(){
        return{
            addUser:PropTypes.func
        }
    }
    constructor(props){
        super(props);
    }

    onNameChanged(event){
        event.preventDefault();
        event.stopPropagation();
        this.name=event.target.value;
    }

     onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        if (this.name){
            this.props.addUser({name:this.name});
            this.name='';
        }
    }
    render() {
        return <div>
            <form onSubmit={even => this.onSubmit()}>
                <label>Name:</label>
                <input type="text" onChange={event => this.onNameChanged()}/>
                <button type="submit">Add</button>
            </form>
        </div>;
    }
}