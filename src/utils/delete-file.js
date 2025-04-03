import fs from 'fs';
export const deleteUploadedFiles = req => {
	if (req.file && req.file.path) {
		fs.unlink(req.file.path, err => {
			if (err) console.error('Failed to delete file:', req.file.path, err);
		});
	}
	if (req.files) {
		if (Array.isArray(req.files)) {
			req.files.forEach(file => {
				if (file.path) {
					fs.unlink(file.path, err => {
						if (err) console.error('Failed to delete file:', file.path, err);
					});
				}
			});
		} else {
			Object.values(req.files).forEach(fileArray => {
				if (Array.isArray(fileArray)) {
					fileArray.forEach(file => {
						if (file.path) {
							fs.unlink(file.path, err => {
								if (err) console.error('Failed to delete file:', file.path, err);
							});
						}
					});
				}
			});
		}
	}
};
