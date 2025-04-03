import cors from 'cors';
import { ENV } from '../config/env';
const corsOptionsDelegate = (req, callback) => {
	const corsOptions = {
		methods: 'GET, POST, DELETE, PUT, PATCH, HEAD, OPTIONS',
		allowedHeaders:
			'Origin, X-Requested-With, Authorization, Content-Type, Accept, X-Idempotency-Key, Set-Cookie',
		credentials: true,
	};

	const origin = req.get('Origin');
	if (!origin) {
		return callback(null, { ...corsOptions, origin: false });
	}
	if (ENV.ALLOWED_ORIGINS.includes(origin)) {
		return callback(null, { ...corsOptions, origin: true });
	}

	return callback(new Error('You are not allowed to access this resource'), {
		...corsOptions,
		origin: false,
	});
};

export const corsMiddleware = cors(corsOptionsDelegate);
