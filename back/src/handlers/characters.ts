import Model, { Character } from '../models/character';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    Model,
    (characters: Character[]) => ({ characters }),
    (character: Character) => ({ character }),
);
