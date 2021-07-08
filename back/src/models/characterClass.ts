import  {
    Document,
    Model,
    Schema,
    model,
} from 'mongoose';

export interface CharacterClass extends Document {
    slug: string;
    name: string;
    text: string;
}

export interface CharacterClassModel extends Model<CharacterClass> {
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
        transform(doc: CharacterClass, ret: CharacterClass) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});

export default model<CharacterClass, CharacterClassModel>('Class', schema);
