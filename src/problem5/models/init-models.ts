import type { Sequelize } from "sequelize";
import { Blog as _Blog } from "./Blog";
import type { BlogAttributes, BlogCreationAttributes } from "./Blog";

export {
  _Blog as Blog,
};

export type {
  BlogAttributes,
  BlogCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Blog = _Blog.initModel(sequelize);


  return {
    Blog: Blog,
  };
}
