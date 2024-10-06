import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  public recipientId!: string;

  @IsNotEmpty()
  @Length(5, 240)
  public content!: string;

  @IsNotEmpty()
  public category!: string;
}
