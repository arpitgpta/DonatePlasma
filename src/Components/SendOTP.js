import {
    TextField,
    Typography,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        display: 'relative',
        bottom: '5px',
        marginTop: '5px'
    },
}))

export default function SendOTP(props) {
    const {
        mobileno,
        setMobileno,
        name,
        setName,
        email,
        setEmail,
        age,
        setAge,
        bloodGroup,
        setBloodGroup,
        sex,
        setSex,
        pincode,
        setPincode,
        otpSender
    } = props
    const handleMobileno = (event) => {
        setMobileno(event.target.value)
    }

    const classes = useStyles()

    return (
        <div>
            <Typography variant="caption">
                Only * marked fields are required
            </Typography>

            <Typography>
                Contact Number
            </Typography>
            <TextField
                value={mobileno}
                onChange={event => setMobileno(event.target.value)}
                autoComplete="off"
            />

            <Typography>
                Pin Code
            </Typography>
            <TextField
                value={pincode}
                onChange={event => setPincode(event.target.value)}
                autoComplete="off"
            />

            <Typography>
                Age
            </Typography>
            <TextField
                value={age}
                onChange={event => setAge(event.target.value)}
                autoComplete="off"
            />

            <Typography>
                BloodGroup
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Blood Group</InputLabel>
                <Select
                    value={bloodGroup}
                    onChange={event => setBloodGroup(event.target.value)}
                >
                    <MenuItem key={0} value={'A+'}>A+</MenuItem>
                    <MenuItem key={1} value={'A-'}>A-</MenuItem>
                    <MenuItem key={2} value={'B+'}>B+</MenuItem>
                    <MenuItem key={3} value={'B-'}>B-</MenuItem>
                    <MenuItem key={4} value={'AB+'}>AB+</MenuItem>
                    <MenuItem key={5} value={'AB-'}>AB-</MenuItem>
                    <MenuItem key={6} value={'O+'}>O+</MenuItem>
                    <MenuItem key={7} value={'O-'}>O-</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Gender</InputLabel>
                <Select
                    value={sex}
                    onChange={event => setSex(event.target.value)}
                >
                    <MenuItem key={1} value={'Female'}>Female</MenuItem>
                    <MenuItem key={0} value={'Male'}>Male</MenuItem>
                </Select>
            </FormControl>

            <Typography>
                Name
            </Typography>
            <TextField
                value={name}
                onChange={event => setName(event.target.value)}
                autoComplete="off"
            />

            <Typography>
                Email
            </Typography>
            <TextField
                value={email}
                onChange={event => setEmail(event.target.value)}
                autoComplete="off"
            />



            <br />
            <Button onClick={otpSender} variant="contained">
                Send OTP
            </Button>
        </div>
    )
}
