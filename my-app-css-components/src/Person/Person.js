import React from 'react';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete';

import styles from './Person.module.css';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <TextField
                label="Name"
                name="person-name"
                id={props.id}
                onChange={props.change}
                value={props.name}
                variant="outlined"
            />
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <Delete className={styles.DeletePerson} onClick={props.delete} />
        </div>
    );
};

export default person;