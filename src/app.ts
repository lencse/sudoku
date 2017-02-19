import * as express from 'express';

let app = express();

app.use('/', express.static('.'));

app.listen(8777, () => {
    console.log('Listen on port 8777');
});