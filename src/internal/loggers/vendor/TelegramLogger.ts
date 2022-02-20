import { Request } from 'express';
import { Telegraf } from 'telegraf';
import { BaseError } from '../../exceptions/BaseError';
import { makeMessageFromErrorAndRequest } from '../../helpers/Utils';
import { Config } from '../../providers/Config';
import { ILogger } from '../../types/logger';
import { DebugLogger } from './DebugLogger';

const config = new Config();

class Logger implements ILogger {
  private _telegraf: Telegraf;
  private _token: string;
  private _chatID: number;

  constructor(token: string, chatID: number) {
    this._token = token;
    this._chatID = chatID;
    this._telegraf = new Telegraf(this._token);
  }

  private _prepareMessage(err: BaseError, req?: Request): string {
    const blockQuote = '```';
    const message = makeMessageFromErrorAndRequest(err, req);
    return blockQuote + message + blockQuote;
  }
  async log(err: BaseError, req?: Request): Promise<void> {
    DebugLogger.debug('Send error to telegram chanel');
    const message = this._prepareMessage(err, req);
    await this._telegraf.telegram.sendMessage(this._chatID, message, {
      parse_mode: 'MarkdownV2',
    });
  }
}
export const TelegramLogger: ILogger = new Logger(
  config.LoggerConfig.TELEGRAM_BOT_TOKEN,
  config.LoggerConfig.TELEGRAM_CHAT_ID,
);
