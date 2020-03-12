import { Application } from 'egg';

export default function(app: Application) {
  const { router, controller } = app;

  console.info(app.custom.test.abc);
  router.get('/', controller.home.index);
}
