import mongoose from 'mongoose';
import debug from './debug';

export const connect = (uri: string) => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', error => debug('db')(error || ''));
mongoose.connection.once('open', () => debug('db')('MongoDB connected'));

export default mongoose.connection;
