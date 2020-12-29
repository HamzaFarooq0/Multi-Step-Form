import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

interface Props {
	handleNext: () => void;
	handleBack: () => void;
}

const validationSchema = yup.object({
	data: yup.string().required('We would like to know about you')
});

const SecondForm = ({ handleNext, handleBack }: Props) => {
	const [ direction, setDirection ] = React.useState('next');
	return (
		<Formik
			initialValues={{
				data: ''
			}}
			validationSchema={validationSchema}
			onSubmit={() => {
				direction === 'next' ? handleNext() : handleBack();
			}}
		>
			<Form>
				<Grid container item xs={12}>
					<Field as={TextField} name="data" label="Tell me about Yourself" fullWidth />
					<ErrorMessage name="data">{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
				</Grid>
				<Button
					type="submit"
					variant="contained"
					style={{ marginRight: '10px' }}
					color="primary"
					onClick={() => setDirection('back')}
				>
					Back
				</Button>
				<Button type="submit" variant="contained" color="primary" onClick={() => setDirection('next')}>
					Continue
				</Button>
			</Form>
		</Formik>
	);
};

export default SecondForm;
