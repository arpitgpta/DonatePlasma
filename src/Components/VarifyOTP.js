import { Button, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function VarifyOTP(props) {
    const { mobileno, otp, setOtp, otpChecker} = props
    return (
        <div>
            <Typography>
                Enter otp sent on {mobileno}
            </Typography>
            <TextField
                value={otp}
                onChange={event => setOtp(event.target.value)}
            />
            <Button
                onClick={otpChecker}
            >
                Varify
            </Button>
        </div>
    )
}
