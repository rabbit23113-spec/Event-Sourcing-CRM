import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  content: string;

  @Column({ name: "author_id" })
  authorId: string;

  @Column({ name: "client_id", nullable: true })
  clientId: string | null;

  @Column({ name: "lead_id", nullable: true })
  leadId: string | null;

  @Column({ name: "deal_id", nullable: true })
  dealId: string | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
