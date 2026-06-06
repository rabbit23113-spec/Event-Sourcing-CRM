import {CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
class Event {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  domain: string;

  @Column()
  action: string;

  @Column({ name: "actor_id" })
  actorId: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Event;
