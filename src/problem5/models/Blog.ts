import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BlogAttributes {
  id: number;
  title: string;
  description?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  lang?: string;
  tags?: string;
}

export type BlogPk = "id";
export type BlogId = Blog[BlogPk];
export type BlogOptionalAttributes = "description" | "content" | "createdAt" | "updatedAt" | "lang" | "tags";
export type BlogCreationAttributes = Optional<BlogAttributes, BlogOptionalAttributes>;

export class Blog extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
  id!: number;
  title!: string;
  description?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
  lang?: string;
  tags?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Blog {
    return Blog.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Blog',
    timestamps: true
  });
  }
}
