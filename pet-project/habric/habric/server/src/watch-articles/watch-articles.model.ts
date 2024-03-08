import { IWatchArticles } from 'src/types/watchArtilces';
import { Column, DataType, Model, Table,  } from "sequelize-typescript";

@Table({tableName: 'watchArticle'})
export class WatchArticles extends Model<IWatchArticles>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    articeles_id: number;                     

    @Column({type: DataType.TEXT, defaultValue: 0, allowNull: false,})
    watch: string;
}