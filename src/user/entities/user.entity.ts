import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20, unique: true })
    username: string

    @Column({ select: false })
    password: string
    
    @Column({ length: 50, unique: true })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    modifiedAt: Date
}
