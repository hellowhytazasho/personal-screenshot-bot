const { Telegraf } = require('telegraf');
const config = require('config');

const { getScreenshotKeyboard } = require('./keyboards/screenshot.keyboard');
const { makeScreenshot } = require('./helpers/screenshot.helper');
const logger = require('./logger')('bot');

const MY_USER_ID = 974108649;
const { telegraf: { botToken: BOT_TOKEN } } = config;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, 'Screenshot bot', getScreenshotKeyboard());
});

bot.hears('📷', async (ctx) => {
  await makeScreenshot();
  const userId = ctx.update.message.from.id;

  if (userId === MY_USER_ID) {
    ctx.replyWithAnimation({
      source: 'screenshot/out.jpeg',
      type: 'photo',
    });
  } else {
    ctx.reply('My creator @taras_kush');
  }
  logger.info(ctx.update.message.from);
});

logger.info('bot started');
bot.launch();
