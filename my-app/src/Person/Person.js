import React from 'react';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 600px)': {
            width: '600px'
        }
    };

    return (
        <div className="Person" style={style}>
            <TextField
                label="Name"
                name="person-name"
                id={props.id}
                onChange={props.change}
                value={props.name}
                variant="outlined"
            />
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <Delete className="DeletePerson" onClick={props.delete} />
        </div>
    );
};

export default Radium(person);