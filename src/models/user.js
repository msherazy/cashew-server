import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		phoneNumber: {
			type: Number,
			required: true,
			trim: true,
			unique: true,
		},
		dateOfBirth: {
			type: Date,
			required: true,
		},
		idFrontData: {
			name: {
				type: String,
				required: true,
			},
			number: {
				type: String,
				required: true,
			},
			dateOfBirth: {
				type: Date,
				required: true,
			},
			nationality: {
				type: String,
				required: true,
			},
			raw: {
				type: String,
				required: true,
			},
		},
		idBackData: {
			raw: {
				type: String,
				required: true,
			},
			occupation: {
				type: String,
				required: false,
			},
			sponsorName: {
				type: String,
				required: false,
			},
			cardNumber: {
				type: String,
				required: false,
			},
		},
		idImages: {
			front: {
				name: {
					type: String,
					required: true,
				},
				url: {
					type: String,
					required: true,
				},
			},
			back: {
				name: {
					type: String,
					required: true,
				},
				url: {
					type: String,
					required: true,
				},
			},
		},
	},
	{
		timestamps: true,
	},
);

export const User = model('User', userSchema);
