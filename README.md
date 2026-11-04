# ESN Telegram Bot Starter (Node.js)

A clean Telegram bot starter in Node.js (Telegraf). Made by [ESN Hosting](https://esnoffical.com/?utm_source=github&utm_medium=readme&utm_campaign=bot-templates).

## What it does

- `/start` greets the user and shows an inline keyboard
- `/help` lists the commands
- `/menu` inline keyboard example: buttons that edit the message, roll a dice and open a link
- Echoes back any text you send
- Long polling, so no web server, domain or open port needed

## Setup

1. Open Telegram, message [@BotFather](https://t.me/BotFather), send `/newbot` and follow the steps. Copy the token it gives you.
2. Optional: send `/setcommands` to @BotFather so `start`, `help` and `menu` show up in the Telegram command menu.
3. Copy `.env.example` to `.env` and paste the token in `TELEGRAM_BOT_TOKEN`.
4. Install and run:

```bash
npm install
npm start
```

## Files

- `index.js`: the bot and its handlers
- `package.json`: telegraf and dotenv
- `.env.example`: copy to `.env` and add your token

Needs Node.js 18 or newer.

## Host it 24/7 on ESN Hosting

Your PC has to stay on for the bot to stay online. [ESN Hosting](https://esnoffical.com/?utm_source=github&utm_medium=readme&utm_campaign=bot-templates) keeps it running 24/7, with bot hosting from $0.50/month. Upload this folder in the panel's file manager, add your `.env` values and press Start. Step-by-step guide: [How to host a Telegram bot](https://docs.esnoffical.com/telegram-bot.html).

Need help? Join the ESN Discord: https://discord.gg/RGPt3zEfGy

## License

MIT. See [LICENSE](LICENSE).
