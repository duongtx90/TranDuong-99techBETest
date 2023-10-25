import { Request, Response } from 'express';
import { BlogRepositories, IBlogSearchFilters } from '../repositories/blog.repo';
export default class BlogController {
    static async delete(req: Request, res: Response) {
        const { id } = req.params;
        await BlogRepositories.delete(Number(id));
        res.json()
    }
    static async update(req: Request, res: Response) {        
        let data = await BlogRepositories.update(req.body);     
        res.json(data)
    }
    static async getOne(req: Request, res: Response) {
        const { id } = req.params;
        let data = await BlogRepositories.getById(Number(id));
        if (!data)
          return  res.status(404).json({ msg: "Not Found" })
        res.json(data)
    }
    static async create(req: Request, res: Response) {
        let data = await BlogRepositories.create(req.body)
        res.json(data)
    }
    static async getAll(req: Request, res: Response) {
        let filter: IBlogSearchFilters = {};
        filter.lang = req.query.lang ? req.query.lang.toString() : undefined;
        filter.tags = req.query.tags ? req.query.tags.toString() : undefined;

        const data = await BlogRepositories.getAll(filter)
        res.json(data)

    }
}