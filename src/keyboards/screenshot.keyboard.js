function GetScreenshotKeyboard() {
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
  GetScreenshotKeyboard,
};
