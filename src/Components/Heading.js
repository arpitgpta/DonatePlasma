import React from 'react'
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    head1: {
        color: "#2D1650",
        textAlign: "center"
    },
}))

export default function Heading() {
    const classes = useStyles()
    return (
        <div  className={classes.head1}>
            <Typography variant="h3">
                Contact  with plasma donners in your area
            </Typography>
        </div>
    )
}
