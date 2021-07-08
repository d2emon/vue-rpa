import Model, { CharacterClass } from '../models/characterClass';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    Model,
    (classes: CharacterClass[]) => ({ classes }),
    (characterClass: CharacterClass) => ({ characterClass }),
);
