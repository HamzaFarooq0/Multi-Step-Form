import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

interface Props {
	handleNext: () => void;
}
const FirstForm = ({ handleNext }: Props) => {
	return (
		<React.Fragment>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					address1: '',
					address2: '',
					zipCode: ''
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Must be 15 character or less').required('First Name is Required'),

					lastName: Yup.string().max(15, 'Must be 15 character or less').required('Last Name is Required'),

					address1: Yup.string().required('Address is required')
				})}
				onSubmit={(values) => {
					handleNext();
				}}
			>
				<Form autoComplete="off">
					<Typography component="span" variant="h6" gutterBottom>
						Bio Data Form
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<Field as={TextField} name="firstName" id="firstName" label="First Name" fullWidth />
							<ErrorMessage name="firstName">
								{(msg) => <div style={{ color: 'red' }}>{msg}</div>}
							</ErrorMessage>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Field as={TextField} name="lastName" label="Last name" fullWidth />
							<ErrorMessage name="lastName">
								{(msg) => <div style={{ color: 'red' }}>{msg}</div>}
							</ErrorMessage>
						</Grid>
						<Grid item xs={12}>
							<Field as={TextField} name="address1" label="Postal Address" fullWidth />
							<ErrorMessage name="address1">
								{(msg) => <div style={{ color: 'red' }}>{msg}</div>}
							</ErrorMessage>
						</Grid>
						<Grid item xs={12}>
							<Field as={TextField} name="address2" label="Parmanent Address" fullWidth />
						</Grid>
						<Grid item xs={12} sm={6}>
							<Field as={TextField} name="zipCode" label="Zip Code" fullWidth />
						</Grid>
					</Grid>
					<Button type="submit" variant="contained" color="primary">
						Continue
					</Button>
				</Form>
			</Formik>
		</React.Fragment>
	);
};

export default FirstForm;
