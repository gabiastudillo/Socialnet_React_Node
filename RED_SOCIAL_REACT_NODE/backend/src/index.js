
require('dotenv').config();
const app = require('./app');
//middlewares
//routes 
app.use(require('./routes/index'));


async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

main();