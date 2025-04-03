import { Router } from 'express';

export const appRouter = Router();
appRouter.use('/auth', (await import('./auth')).authRouter);
