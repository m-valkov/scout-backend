import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
});

export const User = model<IUser>('User', UserSchema);
