import  {
    Document,
    Model,
    Schema,
    model,
} from 'mongoose';

export interface Background extends Document {
    slug: string;
    name: string;
    text: string;
}

export interface BackgroundModel extends Model<Background> {
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
        transform(doc: Background, ret: Background) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});

export default model<Background, BackgroundModel>('Background', schema);
