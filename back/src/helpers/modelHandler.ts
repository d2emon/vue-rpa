import { Model } from 'mongoose';
import { Request, Response } from 'express';

export type ResultProcessor = (result: any) => any;

export default (
    model: Model<any>,
    prepareItems: ResultProcessor = (value) => value,
    prepareItem: ResultProcessor = (value) => value,
    prepareNew?: ResultProcessor,
) => ({
    getItems: async (req: Request, res: Response) => {
        try {
            const query = {};
            const items = await model.find(query);
            return res.json(prepareItems(items));
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    addItem: async (req: Request, res: Response) => {
        try {
            const record = prepareNew ? prepareNew(req.body) : new model(req.body);
            const result = await record.save();
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    getItem: async (req: Request, res: Response) => {
        try {
            const item = await model.findById(req.params.id);
            return res.json(prepareItem(item));
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    getItemBySlug: async (req: Request, res: Response) => {
        try {
            const item = await model.findOne({ slug: req.params.slug });
            return res.json(prepareItem(item));
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    updateItem: async (req: Request, res: Response) => {
        try {
            const result = await model.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    removeItem: async (req: Request, res: Response) => {
        try {
            const result = await model.findByIdAndDelete(req.params.id);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
});
