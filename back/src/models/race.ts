import  {
    Document,
    Model,
    Schema,
    model,
} from 'mongoose';

export interface Race extends Document {
    slug: string;
    name: string;
    text: string;
}

export interface RaceModel extends Model<Race> {
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
       transform(doc: Race, ret: Race) {
           ret.id = ret._id;
           delete ret._id;
           delete ret.__v;
           return ret;
       },
   },
});

export default model<Race, RaceModel>('Race', schema);
