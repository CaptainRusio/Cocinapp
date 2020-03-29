// @ts-nocheck
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';
// project
import indexRouter from './routes';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// call to all routers
indexRouter(app);

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../web_client', 'build')));
// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../web_client/build/index.html'));
// });

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Server running on ${port}`);
});

export default app;
