import React from 'react';
import FirstForm from './FirstForm/FirstForm';
import SecondForm from './SecondForm/SecondForm';
import ThirdForm from './ThirdForm/ThirdForm';

import { Success } from './Success';

const MainForm = () => {
	const [ activeStep, setActiveStep ] = React.useState(1);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	switch (activeStep) {
		case 1:
			return <FirstForm handleNext={handleNext} />;

		case 2:
			return <SecondForm handleNext={handleNext} handleBack={handleBack} />;

		case 3:
			return <ThirdForm handleNext={handleNext} handleBack={handleBack} />;

		default:
			return <Success />;
	}
};

export default MainForm;
