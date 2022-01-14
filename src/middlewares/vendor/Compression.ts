import { Middleware } from '../../interfaces/express';
import compression, { CompressionOptions } from 'compression';
import { HttpConfig } from '../../configurations/Http';

const compressionOptions: CompressionOptions = {
  level: HttpConfig.COMPRESSION_LEVEL,
};

export const Compression: Middleware = compression(compressionOptions);
