import  {
    Document,
    Model,
    Schema,
    model,
} from 'mongoose';

export interface Character extends Document {
    slug: string;
    name: string;
    text: string;
}

export interface CharacterModel extends Model<Character> {
}

const schema: Schema = new Schema({
    slug: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
}, {
    toJSON: {
        transform(doc: Character, ret: Character) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});

export default model<Character, CharacterModel>('Character', schema);
