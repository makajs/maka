'use strict';

import { Application, Context } from 'egg';
import { default as mock, MockOption, BaseMockApplication } from 'egg-mock';

describe('test/index.test.ts', () => {
  let app: BaseMockApplication<Application, Context>;
  before(() => {
    app = mock.app({ typescript: true } as MockOption);
    return app.ready();
  });
  after(() => app.close());
  it('should work', async () => {
    await app
      .httpRequest()
      .get('/')
      .expect('hi, egg')
      .expect(200);
  });
});
