import React from 'react';
import Button from '@material-ui/core/Button';


const MyButton = (props) => {
    return (
        <Button 
            href={props.link} 
            varient="contained" 
            size="small"
            style={{
                background: "#896E60", 
                color: props.color
            }}>
            {props.text}
        </Button>
    );
};

export default MyButton;