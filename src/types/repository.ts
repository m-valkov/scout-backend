import { Model } from 'mongoose';

export interface IRead<T> {
  findOne(id: string): Promise<T>;
  find(document: T): Promise<T[]>;
}

export interface IWrite<T> {
  create(document: T): void;
  update(id: string, document: T): Promise<void>;
  delete(id: string): Promise<void>;
}

// T- это интерфейс модели
export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  create(document: T): void {
    this._model.create(document);
  }
  update(id: string, document: T): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  find(document: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
