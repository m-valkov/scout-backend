import { Middleware } from '../../types/express';
import compression, { CompressionOptions } from 'compression';
import { Config } from '../../providers/Config';

const config = new Config();

const compressionOptions: CompressionOptions = {
  level: config.HttpConfig.COMPRESSION_LEVEL,
};

export const Compression: Middleware = compression(compressionOptions);
