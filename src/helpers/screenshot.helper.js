const screenshot = require('screenshot-desktop')
const fs = require('fs')

async function makeScreenshot() {
  const img = await screenshot({
    format: 'jpeg',
  });
  fs.writeFile('screenshot/out.jpeg', img, (err) => {
    if (err) {
      throw err;
    }
  })
  return { success: true }
}

module.exports = {
  makeScreenshot,
};
