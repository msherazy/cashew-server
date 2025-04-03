/**
 * Generates and sends a success response.
 *
 * @param {Object} options - Response options.
 * @param {Object} options.req - Express request object.
 * @param {Object} options.res - Express response object.
 * @param {number} [options.statusCode=200] - HTTP status code.
 * @param {any} [options.data=null] - Response data (optional).
 * @param {string} [options.message='Request processed successfully'] - Custom success message (optional).
 * @returns {Object} - The Express response object.
 */
export const success = ({
	req,
	res,
	statusCode = 200,
	data = null,
	message = 'Request processed successfully',
}) => {
	return res.status(statusCode).json({
		success: true,
		path: req.originalUrl,
		message,
		statusCode,
		data,
		timestamp: new Date().toUTCString(),
	});
};

/**
 * Generates and sends a failure (error) response.
 *
 * @param {Object} options - Response options.
 * @param {Object} options.req - Express request object.
 * @param {Object} options.res - Express response object.
 * @param {number} [options.statusCode=500] - HTTP status code.
 * @param {string} [options.message='An error occurred'] - Custom error message (optional).
 * @param {any} [options.details=null] - Additional error details (optional, useful for debugging).
 * @returns {Object} - The Express response object.
 */
export const failure = ({
	req,
	res,
	statusCode = 500,
	message = 'An error occurred',
	details = null,
	errors = null,
}) => {
	return res.status(statusCode).json({
		success: false,
		path: req.originalUrl,
		message,
		statusCode,
		method: req.method,
		...(errors !== null && { details: errors }),
		timestamp: new Date().toUTCString(),
	});
};
