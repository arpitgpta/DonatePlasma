import React from 'react'
import OtpInput from 'react-otp-input';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core'

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
export default function PincodeInput(props) {
    const { pincode, setPincode } = props
    const classes = useStyles()
    return (
        <div>
            <Typography variant="h5" className={classes.head2}>
                Enter 3 or more digits of your pincode
            </Typography>
            <OtpInput
                value={pincode}
                onChange={setPincode}
                numInputs={6}
                separator={<span></span>}
                shouldAutoFocus={true}
                inputStyle={classes.otp}
            />
        </div>
    )
}
