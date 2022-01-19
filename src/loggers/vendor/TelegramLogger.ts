import { createLogger, LoggerOptions, Logger } from 'winston';
import { LoggerConfig } from '../../configurations/Logger';
import telegramTransport from 'winston-telegram';

const errorLoggerOptions: LoggerOptions = {
  transports: [
    new telegramTransport({
      token: LoggerConfig.TELEGRAM_BOT_TOKEN,
      chatId: LoggerConfig.TELEGRAM_CHAT_ID,
      level: 'error',
      unique: false,
      parseMode: 'MarkdownV2',
      formatMessage: options => {
        let message = options.message;
        message = `\`\`\`${message}\`\`\``;
        return message;
      },
    }),
  ],
};

export const TelegramLogger: Logger = createLogger(errorLoggerOptions);
