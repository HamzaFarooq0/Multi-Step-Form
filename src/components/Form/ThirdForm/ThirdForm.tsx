import { TextField, Grid, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

interface Props {
	handleNext: () => void;
	handleBack: () => void;
}

const validationSchema = yup.object({
	passion: yup.string().required('I said your passion'),
	interest: yup.string().required('I said your Interest')
});

const ThirdForm = ({ handleNext, handleBack }: Props) => {
	const [ direction, setDirection ] = React.useState('next');
	const [ check, setCheck ] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheck(!check);
	};

	return (
		<Formik
			initialValues={{
				passion: '',
				interest: ''
			}}
			validationSchema={validationSchema}
			onSubmit={() => {
				direction === 'next' ? handleNext() : handleBack();
			}}
		>
			<Form>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<Field as={TextField} name="passion" label="Your Passion.." />
						<ErrorMessage name="passion">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Field as={TextField} name="interest" label="Your Interest.." />
						<ErrorMessage name="interest">
							{(msg) => <div style={{ color: 'red' }}>{msg}</div>}
						</ErrorMessage>
					</Grid>

					<Grid item xs={12}>
						<FormControlLabel
							control={<Checkbox checked={check} onChange={handleChange} name="checkA" />}
							label="Are you sure that you've provided the correct information"
						/>
					</Grid>
				</Grid>
				<Button type="submit" variant="contained" color="primary" onClick={() => setDirection('back')}>
					Back
				</Button>
				<Button type="submit" variant="contained" color="primary" onClick={() => setDirection('next')}>
					Continue
				</Button>
			</Form>
		</Formik>
	);
};

export default ThirdForm;
