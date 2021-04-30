import {
    TextField,
    Typography,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Grid
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        display: 'relative',
        bottom: '15px',
        marginTop: '5px'
    },
    inputField: {
        display: 'relative',
        bottom: '5px',
    }
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
        <Grid container direction="column" spacing={2} justify="space-evenly" alignItems="center">

            <Grid item>
                <Typography variant="caption">
                    Only * marked fields are required
                </Typography>
            </Grid>

            <Grid item container direction="row" spacing="5" justify="center"> 
                <Grid item xs={4}>
                    <Typography>
                        Contact Number*
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={mobileno}
                        onChange={event => setMobileno(event.target.value)}
                        autoComplete="off"
                        className={classes.inputField}
                    />
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Pin Code*
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={pincode}
                        onChange={event => setPincode(event.target.value)}
                        autoComplete="off"
                        className={classes.inputField}
                    />
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Blood Group*
                    </Typography>
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
            </Grid>
            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Gender*
                    </Typography>
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Age
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={age}
                        onChange={event => setAge(event.target.value)}
                        autoComplete="off"
                        className={classes.inputField}
                    />
                </Grid>
            </Grid>

            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Name
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={name}
                        onChange={event => setName(event.target.value)}
                        autoComplete="off"
                        className={classes.inputField}
                    />
                </Grid>

            </Grid>

            <Grid item container direction="row" spacing="5" justify="center">
                <Grid item xs={4}>
                    <Typography>
                        Email
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        autoComplete="off"
                        className={classes.inputField}
                    />
                </Grid>
            </Grid>

            <Grid>
                <Button onClick={otpSender} variant="contained">
                    Send OTP
                </Button>
            </Grid>

        </Grid>
    )
    }
