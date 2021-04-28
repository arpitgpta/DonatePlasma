import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Modal, TextField, Typography, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SendOTP from './SendOTP';
import axios from 'axios';
import VarifyOTP from './VarifyOTP'

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
    const [email, setEmail] = useState("")
    const [age, setAge] = useState('')
    const [sex, setSex] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [otp, setOtp] = useState()
    const [name, setName] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [newPincode, setNewPincode] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [numberVarified, setNumberVarified] = useState(false)

    const otpSender = () => {
        axios.post("/registerDonor", {
            Contact: mobileno,
            FullName: name,
            Email: email,
            Age: age,
            Sex: sex,
            BloodGroup: bloodGroup,
            ZipCode: newPincode,
        })
            .then(response => {
                console.log(response);
                setOtpSent(true)
            })
    }

    const otpChecker = () => {
        axios.post('/verifyDonor', {
            contact: mobileno,
            code: otp
        })
            .then(response => {
                if(response.status === 200)
                {
                    setNumberVarified(true)
                }
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
                        <Typography>
                            Thanks for providing information
                        </Typography>
                        :
                        <VarifyOTP
                            mobileno={mobileno}
                            otp={otp}
                            setOtp={setOtp}
                            otpChecker={otpChecker}
                        />
                    :
                    <SendOTP
                        mobileno={mobileno}
                        setMobileno={setMobileno}
                        age={age}
                        setAge={setAge}
                        bloodGroup={bloodGroup}
                        setBloodGroup={setBloodGroup}
                        sex={sex}
                        setSex={setSex}
                        pincode={newPincode}
                        setPincode={setNewPincode}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
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
