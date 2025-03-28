import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isNotificationEnabled: boolean;

  @Column({ default: false })
  isNewDashboardEnabled: boolean;

  @Column({ default: 'UTC' })
  timezone: string;
}
