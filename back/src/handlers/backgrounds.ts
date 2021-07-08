import Model, { Background } from '../models/background';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    Model,
    (backgrounds: Background[]) => ({ backgrounds }),
    (background: Background) => ({ background }),
);
