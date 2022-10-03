import { 
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
 } from 'typeorm';
 import { 
   Length,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Length(8, 8)
  id: string;

  @Column()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @Column()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  @Column()
  @MinLength(3)
  @MaxLength(20)
  lastName: string;

  @Column()
  @MinLength(3)
  @MaxLength(200)
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
