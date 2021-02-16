function getScreenshotKeyboard() {
  return {
    reply_markup: {
      keyboard: [
        [{
          text: '📷',
        }],
      ],
      resize_keyboard: true,
    },
  };
}

module.exports = {
  getScreenshotKeyboard,
};
