import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  age: number;

  @Prop()
  race: string;

  @Prop()
  gender: string;

  @Prop()
  location: string;

  @Prop()
  hobies: [];

  @Prop()
  interest: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
