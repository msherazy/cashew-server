import fs from 'fs';
import path from 'path';
import { ENV } from '../config';
import { User } from '../models';
import { ulid } from 'ulid';

export class UserService {
	constructor(req) {
		this.req = req;
	}

	async create() {
		const { body, files } = this.req;
		const { firstName, lastName, email, phoneNumber, idFrontData, idBackData } = body;

		const uniqueId = ulid();
		const newFrontFileName = `${idFrontData.number}-front-${uniqueId}.jpg`;
		const newBackFileName = `${idFrontData.number}-${uniqueId}.jpg`;

		const frontFile = files.front && files.front[0];
		const backFile = files.back && files.back[0];
		const uploadDir = frontFile.destination || path.dirname(frontFile.path);

		const newFrontPath = path.join(uploadDir, newFrontFileName);
		const newBackPath = path.join(uploadDir, newBackFileName);

		fs.renameSync(frontFile.path, newFrontPath);
		fs.renameSync(backFile.path, newBackPath);

		const idImages = {
			front: { name: newFrontFileName, url: `${ENV.UPLOAD_PATH}/${newFrontFileName}` },
			back: { name: newBackFileName, url: `${ENV.UPLOAD_PATH}/${newBackFileName}` },
		};

		const dateOfBirth =
			idFrontData.dateOfBirth instanceof Date
				? idFrontData.dateOfBirth
				: new Date(idFrontData.dateOfBirth);

		const user = await User.create({
			firstName,
			lastName,
			email,
			phoneNumber,
			dateOfBirth,
			idFrontData,
			idBackData,
			idImages,
		});

		return user;
	}

	async findUser({ email = '', phoneNumber = '' }) {
		const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });
		return user;
	}
}
