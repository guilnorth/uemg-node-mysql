'use strict';

const app = require('./server/server');

app.listen(process.env.PORT || 8080, () => {
    console.log(`server online: ${process.env.PORT || '8080'}`);
});
