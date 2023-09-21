import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('coffe_db') // (default) sql tabel will be named as 'coffe'
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', { nullable: true })
    flavor: string[];
}