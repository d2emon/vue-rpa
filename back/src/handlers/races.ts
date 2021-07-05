import Model, { Race } from '../models/race';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    Model,
    (races: Race[]) => ({ races }),
    (race: Race) => ({ race }),
);
