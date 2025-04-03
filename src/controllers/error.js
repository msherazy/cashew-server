import { failure } from '../utils';
/**
 * Middleware to handle unmatched routes (Not Found).
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 */
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

/**
 * Global error handling middleware.
 *
 * @param {Error} error - Error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 * @returns {Object} - JSON response with error details.
 */
const globalError = (error, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	if (error.message === 'Validation Error') {
		statusCode = 422;
	}

	return failure({
		req,
		res,
		statusCode,
		message: error.message,
		errors: error.errors || null,
		details: process.env.NODE_ENV === 'production' ? null : error.stack,
	});
};

export const ErrorController = {
	globalError,
	notFound,
};
