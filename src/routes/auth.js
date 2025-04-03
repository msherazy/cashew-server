import { Router } from 'express';
import { AuthController } from '../controllers';
import { upload, validate } from '../middlewares';
import { registerSchema } from '../validation-schemas';

export const authRouter = Router();

authRouter.get('/', AuthController.fetchUser);

authRouter.post(
	'/register',
	upload.fields([
		{ name: 'front', maxCount: 1 },
		{ name: 'back', maxCount: 1 },
	]),
	validate(registerSchema),
	AuthController.register,
);
