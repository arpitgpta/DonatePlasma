import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Modal, TextField, Typography, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SendOTP from './SendOTP';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    donate: {
        position: "fixed",
        right: "2rem",
        top: "2rem",
        width: "20%",
        color: "red",
        backgroundColor: "pink",
        fontSize: "1.2rem"
    },
    popup: {
        position: "absolute",
        width: "80%",
        height: "75%",
        marginLeft: "10%",
        marginTop: "5%",
        backgroundColor: theme.palette.background.paper,
        marginBottom: "20px",
    },

}))

function RegisterPopup(props) {
    const classes = useStyles();
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            props.onClose();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    const [mobileno, setMobileno] = useState("")
    const [otp, setOtp] = useState(0)
    const [name, setName] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [numberVarified, setNumberVarified] = useState(false)

    const otpSender = () => {
        axios.post("/sendOTP", {
            mobileno : mobileno
        })
        .then(response => {
            console.log(response);
            setOtpSent(true)
        })
    }

    return (
        <Paper
            elevation={10}
            className={classes.popup}
        >
            <Button style={{ float: "right" }} onClick={props.onClose}>
                <CloseIcon />
            </Button>

            {
                otpSent 
                ? 
                    numberVarified 
                    ?
                    console.log('somting 1')
                    :
                    console.log('somting 2')
                : 
                <SendOTP 
                    mobileno={mobileno} 
                    setMobileno={setMobileno}
                    otpSender={otpSender}
                />
            }


        </Paper>
    );
}

export default function Register(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button
                className={classes.donate}
                variant="contained"
                color="default"
                onClick={handleOpen}
            >
                <span>
                    Donate Plasma
                </span>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <RegisterPopup
                    {...props}
                    onClose={handleClose}
                />
            </Modal>
        </div>
    )
}
