import { ValidationError } from '../errors';
import { deleteUploadedFiles } from '../utils';
import { UserService } from './user';

export class AuthService {
	constructor(req) {
		this.req = req;
		this.userServcie = new UserService(req);
	}
	async register() {
		const { body } = this.req;
		const { email, phoneNumber } = body;
		const user = await this.userServcie.findUser({ email, phoneNumber });
		if (user) {
			deleteUploadedFiles(this.req);
			throw new ValidationError('User already exists', user);
		}
		const newUser = await this.userServcie.create();
		return newUser;
	}
}
