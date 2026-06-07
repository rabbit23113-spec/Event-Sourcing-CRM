import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Role} from "../dto/create-user.dto";

export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({name: "first_name"})
  firstName: string;

  @Column({name: "last_name"})
  lastName: string;

  @Column()
  email: string;

  @Column({name: "password_hash"})
  passwordHash: string;

  @Column({enum: Role, type: "simple-enum"})
  role: Role;

  @CreateDateColumn({name: "created_at"})
  createdAt: Date;

  @UpdateDateColumn({name: "updated_at"})
  updatedAt: Date;
}
