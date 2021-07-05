import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import {
    error404,
    errorHandler,
} from './handlers/error';
import config from './helpers/config';
import { connect } from './helpers/mongo';

// Import routes
import raceRoutes from './routes/races';

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

//  Set database engine
app.set('dbConnection', connect(config.MONGO_URI))

// Use routes
app.use('/api/v1.0/race', raceRoutes);

app.use(error404);
app.use(errorHandler(app.get('env')));

export default app;
