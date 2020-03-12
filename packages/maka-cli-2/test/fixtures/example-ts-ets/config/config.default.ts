export default function() {
  // built-in config
  const config: Egg.PowerPartial<Egg.EggAppConfig> = {};

  config.keys = '123123';

  // biz config
  const bizConfig = {
    biz: {
      type: 'biz',
    },
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}
