import { TextField, Typography, Button } from '@material-ui/core'
import React from 'react'

export default function SendOTP(props) {
    const {mobileno, setMobileno, otpSender} = props
    const handleMobileno = (event) => {
        setMobileno(event.target.value)
    }

    

    return (
        <div>
            <Typography variant="h4">
                Enter Your Mobile number
            </Typography>
            <Typography variant="h6">
                Patients will contact with you with this number
            </Typography>
            <TextField value={mobileno} onChange={handleMobileno}/>
            <Button onClick={otpSender} variant="contained">
                Send OTP
            </Button>
        </div>
    )
}
