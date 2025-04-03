import dotenv from 'dotenv';
import { styleText } from 'util';
const getEnvVar = (name, required = true) => {
	if (!process.env[name] && required) {
		throw new Error(
			styleText(['bold', 'red'], `⚠️ Missing required environment variable: ${name}`),
		);
	}
	return process.env[name];
};

dotenv.config();

const PORT = Number(getEnvVar('PORT', false) || 3000);
const DB_URI = getEnvVar('DB_URI');
const DB_NAME = getEnvVar('DB_NAME');
const ALLOWED_ORIGINS = getEnvVar('ALLOWED_ORIGINS')?.split(',');
const UPLOAD_PATH = getEnvVar('UPLOAD_PATH');

export const ENV = {
	DB_URI,
	PORT,
	DB_NAME,
	ALLOWED_ORIGINS,
	UPLOAD_PATH,
};
