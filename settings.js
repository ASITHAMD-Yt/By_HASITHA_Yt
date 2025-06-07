const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : procDwx0GQwJ#DGQ4GuMuLaRKHfAvj4OpKOloEDVQfJOTnTrnQvArg4sess.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'qkZ3gazA#kWQPYrU8-feyv8k49CN3s6zpU1cIwZychXe4hSJfWts' : process.env.POSTGRESQL_URL,
};
