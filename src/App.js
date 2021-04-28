import React, { useState, useEffect } from 'react'
import { Button, Paper, Grid, Typography } from '@material-ui/core'
import Heading from './Components/Heading'
import Footer from './Components/Footer'
import PinCodeInput from './Components/PincodeInput'
import CityInput from './Components/CityInput'
import ResultTable from "./Components/ResultTable";
import red from "@material-ui/core/colors/red";

import { makeStyles } from '@material-ui/core/styles';

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
	const [city, setCity] = useState("")

	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Button

				className={classes.donate}
				variant="contained"
			>
				<span>
					Donate Plasma
				</span>
			</Button>
			<Paper
				elevation={10}
				className={classes.searchField}
			>
				<Heading />
				<Grid container alignItems="center" justify="center">
					<Grid item xs={6}>
						<PinCodeInput pincode={pincode} setPincode={setPincode} />
					</Grid>
					{/* <Grid item xs={12} md={1}>
						<Typography variant="h6" className={classes.OR}>
							OR
						</Typography>
					</Grid>
					<Grid item item xs={12} md={5}>
						<CityInput city={city} setCity={setCity} />
					</Grid> */}
				</Grid>
				<ResultTable />
			</Paper>
			<Footer />
		</div>
	);
}

export default App;
