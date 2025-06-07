const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'H4JRFShJ#oKfmJhcdaoNRnDT9UDXZ_QZlTbs6eJNm4NGGQpQqygg' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : procDwx0GQwJ#DGQ4GuMuLaRKHfAvj4OpKOloEDVQfJOTnTrnQvArg4sess.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'H4JRFShJ#oKfmJhcdaoNRnDT9UDXZ_QZlTbs6eJNm4NGGQpQqygg' : process.env.POSTGRESQL_URL,
};
