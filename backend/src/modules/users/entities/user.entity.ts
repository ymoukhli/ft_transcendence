import { 
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
 } from 'typeorm';
 import { 
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @Column({ default: null })
  @MinLength(3)
  @MaxLength(40)
  email: string;

  @Column({ default: null })
  @MinLength(3)
  @MaxLength(20)
  password: string;

  @Column({ default: null })
  @MinLength(3)
  @MaxLength(20)
  displayedName: string;

  @Column()
  @MinLength(3)
  @MaxLength(20)
  firstName: string;

  @Column()
  @MinLength(3)
  @MaxLength(20)
  lastName: string;

  @Column({ nullable: true })
  @IsUrl()
  imageUrl: string;

  @Column({ default: null })
  @MinLength(3)
  @MaxLength(200)
  bio: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
