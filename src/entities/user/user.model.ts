import { Schema, model, Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  password: string;
}

export type UserParams = Pick<IUser, 'name' | 'password' | '_id'>;

export const UserSchema = new Schema({
  name: { type: String, required: true },
});

export const User = model<IUser>('User', UserSchema);
