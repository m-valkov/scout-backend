# Scout Backend
![APM](https://img.shields.io/apm/l/vim-mode) [![Build stage](https://github.com/m-valkov/scout-backend/actions/workflows/stage.yaml/badge.svg?branch=dev)](https://github.com/m-valkov/scout-backend/actions/workflows/stage.yaml) [![Build prod](https://github.com/m-valkov/scout-backend/actions/workflows/production.yaml/badge.svg?branch=master)](https://github.com/m-valkov/scout-backend/actions/workflows/production.yaml)

![Statements](https://img.shields.io/badge/statements-91.7%25-brightgreen.svg?style=flat) ![Branches](https://img.shields.io/badge/branches-82.85%25-yellow.svg?style=flat) ![Functions](https://img.shields.io/badge/functions-92.3%25-brightgreen.svg?style=flat) ![Lines](https://img.shields.io/badge/lines-91.91%25-brightgreen.svg?style=flat)
## .env
```ini
#app
IS_PRODUCTION='false'

#http
PORT='3000'
DOMAIN='localhost'
COMPRESSION_LEVEL='0'
MAX_REQUEST_BODY_SIZE='2mb'
MAX_REQUEST_URL_SIZE='1kb'
URL_EXTENDED_ENABLED='false'
RATE_LIMIT_WINDOWS_MS='6000'
RATE_LIMIT_MAX_REQUESTS='100'
BASIC_AUTH_PASSWORD='password'

#api
API_PREFIX='/api/v1'

#logger
ACCESS_LOG_MAX_FILE_SIZE_IN_BYTES='10_485_760'
ACCESS_LOG_MAX_FILES='5'
ERROR_LOG_MAX_FILE_SIZE_IN_BYTES='10_485_760'
ERROR_LOG_MAX_FILES='5'
SENTRY_DSN="your Snetry dsn like a https://<token>.senty.io/12345"
TELEGRAM_BOT_TOKEN="****6424:AAH*****************ChJCwrX4fc"
TELEGRAM_CHAT_ID="-1001********21"

#swagger
OPENAPI_VERSION='3.0.0'
SWAGGER_TITLE='Api documentation'
API_VERSION='1.0.0'
SERVER_URL='http://localhost:3000/api'
SERVER_DESCRIPTION='Dev server'
DOCS_ENDPOINT='/docs'
```
