import app from './app';
import config from './helpers/config';
import debug from './helpers/debug';

const port: number = config.PORT;

app.set('port', port);

app.listen(
    app.get('port'),
    () => debug(`${config.APP_NAME}:run`)(`Express server listening on port ${port}`),
)
