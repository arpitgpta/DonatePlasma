import React, { useState, useEffect } from 'react'
import { Button, Paper, Grid, Typography } from '@material-ui/core'
import Heading from './Components/Heading'
import Footer from './Components/Footer'
import PinCodeInput from './Components/PincodeInput'
import CityInput from './Components/CityInput'
import ResultTable from "./Components/ResultTable";
import { makeStyles } from '@material-ui/core/styles';
import Register from './Components/Register'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '3rem',
		marginTop: "100px",
	},
	donate: {
		position: "fixed",
		right: "2rem",
		top: "2rem",
		width: "20%",
		color: "red",
		backgroundColor: "pink",
		fontSize: "1.2rem"
	},
	searchField: {
		padding: "3rem 10%",
		minHeight: "450px"
	},
	OR: {
		color: "blue",
		marginTop: "35px"
	}
}))



function App() {

	const [pincode, setPincode] = useState("")
	const [donorData, setDonorData] = useState({})
	const classes = useStyles()

	useEffect(()=>{
		if(pincode.length >= 3)
		{
			axios.get('/searchDonor?pincode='+pincode)
			.then(response =>{
				console.log(response);
			})
		}
	}, [pincode])

	return (
		<div className={classes.root}>
			<Register />
			<Paper
				elevation={10}
				className={classes.searchField}
			>
				<Heading />
				<Grid container alignItems="center" justify="center">
					<Grid item xs={6}>
						<PinCodeInput
							pincode={pincode}
							setPincode={setPincode}
						/>
					</Grid>
				</Grid>
				<ResultTable donorData={donorData} />
			</Paper>
			<Footer />
		</div>
	);
}

export default App;
