import React from 'react';
import TextField from '@material-ui/core/TextField'

const person = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default person;