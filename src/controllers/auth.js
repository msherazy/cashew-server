import asyncHandler from 'express-async-handler';
import { AuthService } from '../services';
import { success } from '../utils';
import { User } from '../models/index.js';

const register = asyncHandler(async (req, res) => {
	const authService = new AuthService(req);
	const newUser = await authService.register();
	return success({
		req,
		res,
		message: 'User registered successfully',
		data: newUser,
		statusCode: 201,
	});
});

const fetchUser = async (req, res) => {
	try {
		const { email, phoneNumber } = req.query;
		const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'User not found',
			});
		}

		const filteredData = {
			name: `${user.firstName} ${user.lastName}`,
			email: user.email,
			mobile: user.phoneNumber,
			emiratesIdName: user.idFrontData?.name,
			emiratesIdNumber: user.idFrontData?.number,
			idImages: {
				front: user.idImages?.front,
				back: user.idImages?.back,
			},
		};

		return res.status(200).json({
			success: true,
			data: filteredData,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

export const AuthController = {
	register,
	fetchUser,
};
