import betterLogging from 'better-logging';
import express from 'express';
import helmet from 'helmet';

import path from 'path';
import { fileURLToPath } from 'url';
import { ENV } from './config';
import { ErrorController } from './controllers';
import { connect } from './database';
import { corsMiddleware } from './middlewares';
import { appRouter } from './routes';

betterLogging(console, {
	format: ctx => {
		const gray = '\x1b[90m';
		const reset = '\x1b[0m';

		return `${gray}[ ${new Date().toUTCString()} ]${reset} ${ctx.type} ${ctx.msg}`;
	},
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(corsMiddleware);
app.use(
	helmet({
		contentSecurityPolicy: false,
		crossOriginOpenerPolicy: false,
	}),
);

app.use('/api/v1', appRouter);

app.use('*', ErrorController.notFound);
app.use(ErrorController.globalError);

connect()
	.then(result => {
		app.listen(ENV.PORT, () => {
			console.log(`Server is running on port ${ENV.PORT}`);
		});
	})
	.catch(err => {});
