'use strict';

//process.chdir(__dirname);

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as path from 'path';
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.api();
  }

  /**
  * Configure application
  *
  * @class Server
  * @method config
  */

  public api() {

  }

  public config() {
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.use(logger('dev'));

    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    this.app.use(cookieParser('LODI_DODI'));

    this.app.use(methodOverride());

    this.app.use( (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 404;
      next(err);
    });

    this.app.use(errorHandler());

  }

  public routes() {

  }

}
