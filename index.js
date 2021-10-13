import express from 'express';
import config from './config.js';
import connect from './database.js';
import errorController from "./controllers/errorController.js";
import contactController from "./controllers/contactController.js";

const server = express();
config(server);
await connect();

// What do you think, is /contact better or /contacts?
// Research opinions about this after you are done with the task
server.use("/contact", contactController);
server.use(errorController);

server.listen(process.env.PORT, () => {
    console.log(`Listening to http://localhost:${process.env.PORT}`);
});