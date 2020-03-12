'use strict';

import { Application, Context } from 'egg';

export default (app: Application) => {
  app.router.get('/', function* (this: Context) {
    this.body = `hi, egg`;
  });
};