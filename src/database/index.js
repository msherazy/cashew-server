import mongoose from 'mongoose';
import { ENV } from '../config';

mongoose.connection.on('connected', () => {
	console.log('DB connection established');
});

mongoose.connection.on('disconnected', () => {
	console.log('DB connection terminated.');
});

mongoose.connection.on('error', error => {
	console.error('An error occurred while connecting to the database:', error);
});

export const connect = async () => {
	try {
		await mongoose.connect(ENV.DB_URI, {
			autoIndex: true,
			dbName: ENV.DB_NAME,
		});
	} catch (error) {
		console.error('Error connecting to the database:', error);
		throw error;
	}
};

export const disconnect = async () => {
	try {
		await mongoose.disconnect();
	} catch (error) {
		console.error('Error disconnecting from the database:', error);
	}
};
