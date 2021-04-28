import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    otp: {
        border: '0px',
        borderBottom: "1px solid black",
        marginRight: '10px',
        fontSize: '3rem',
        color: '#464646'
    },
    head2: {
        color: '#10071F9F',
        margin: '15px 0'
    }

}))

export default function CityInput(props) {

    const { city, setCity } = props
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h5" className={classes.head2}>
                Enter your city name 
            </Typography>
            <TextField
            />
        </div>
    )
}
