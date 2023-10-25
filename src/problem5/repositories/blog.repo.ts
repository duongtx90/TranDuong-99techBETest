import { Op } from "sequelize";
import { Blog, BlogAttributes } from "../models/Blog";
console.log(Blog)

export interface IBlogSearchFilters {
    lang?: string;
    tags?: string;
}
export class BlogRepositories {
    static async getAll(filter?: IBlogSearchFilters): Promise<BlogAttributes[]> {
        let tags: string[] = [];
        if (filter?.tags) {
            tags = filter.tags.split(",").map(t => t.trim());
            console.log("🚀 ~ file: blog.repo.ts:14 ~ BlogRepositories ~ getAll ~ tags:", tags)
        }
        let query: any = {};
        if (filter?.lang)
            query.lang = filter.lang;
        if (tags.length)
            query[Op.or] = tags.map(tag => ({
                tags: {
                    [Op.like]: `%${tag}%`, // Use the LIKE operator to check if the tag is part of the 'tags' column
                },
            })),
                console.log("🚀 ~ file: blog.repo.ts:20 ~ BlogRepositories ~ getAll ~ query:", query)
        return await Blog.findAll({
            where: query
        });
    }



    static async getById(id: number): Promise<BlogAttributes | null> {
        return await Blog.findByPk(id);
    }
    static async create(blog: BlogAttributes) {
        return await Blog.create(blog);
    }
    static async delete(id: number) {
        let blog = await Blog.findByPk(id)
        if (blog)
            await blog.destroy();
    }
    static async update(data: BlogAttributes) {
        let blog = await Blog.findByPk(data.id)
        await blog?.update(data);
    }
}