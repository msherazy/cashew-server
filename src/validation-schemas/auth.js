import * as yup from 'yup';

export const registerSchema = yup.object({
	body: yup.object({
		firstName: yup
			.string()
			.min(2, 'First name must be at least 2 characters')
			.required('First name is required'),
		lastName: yup
			.string()
			.min(2, 'Last name must be at least 2 characters')
			.required('Last name is required'),
		email: yup.string().email('Must be a valid email').required('Email is required'),
		phoneNumber: yup
			.string()
			.matches(/^\d{9}$/, 'Phone number must be 9 digits')
			.required('Phone number is required'),
		idFrontData: yup.object().shape({
			name: yup.string().required('ID Front name is required'),
			number: yup.string().required('ID number is required'),
			dateOfBirth: yup.date().required('Date of Birth is required'),
			nationality: yup.string().required('Nationality is required'),
			raw: yup.string().notRequired(),
		}),
		idBackData: yup.object().shape({
			raw: yup.string().notRequired(),
			occupation: yup.string().notRequired(),
			sponsorName: yup.string().notRequired(),
			cardNumber: yup.string().notRequired(),
		}),
	}),
	files: yup.object({
		front: yup.mixed().required('Front file is required'),
		back: yup.mixed().required('Back file is required'),
	}),
});
