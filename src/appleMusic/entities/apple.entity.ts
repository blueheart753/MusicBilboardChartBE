import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'apple' })
export class ApplesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Artist: string;

  @Column()
  songName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  createdDate: Date;
}
