import appFactory from './appFactory';
import { getGlobal } from '@makajs/utils';
const globalObj = getGlobal();

const isProduction = process.env.isProduction;

function getCssRequireModule() {
  const scripts = document.querySelectorAll('script');
  let ret = '';
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i] && scripts[i].src && (
      scripts[i].src.indexOf('css.min.js') !== -1
            || scripts[i].src.indexOf('css.js') !== -1
    )
    ) {
      ret = scripts[i].src;
    }
  }

  return ret;
}

function removeCss(href) {
  const links = document.querySelectorAll('link');
  for (let i = 0; i < links.length; i++) {
    // const _href = links[i].href;
    if (links[i] && links[i].href && (
      links[i].href.indexOf('/' + href + '.css') !== -1 ||
            links[i].href.indexOf('/' + href + '.min.css') !== -1
    )) {
      links[i].parentNode.removeChild(links[i]);

      if (isProduction) {
        globalObj.require.undef(getCssRequireModule() + '!' + links[i].href.replace('.css', ''));
      } else {
        globalObj.require.undef(getCssRequireModule() + '!' + links[i].href.replace('.css', ''));
      }
    }
  }
}

function removeJs(src) {
  const scripts = document.querySelectorAll('script');
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i] && scripts[i].src && (
      scripts[i].src.indexOf('/' + src + '.js') !== -1 ||
            scripts[i].src.indexOf('/' + src + '.min.js') !== -1
    )) {
      scripts[i].parentNode.removeChild(scripts[i]);

      if (isProduction) {
        globalObj.require.undef(scripts[i].src);
      } else {
        globalObj.require.undef(scripts[i].src);
      }
    }
  }
}


function removeInternal(app) {
  removeCss(app);
  appFactory.removeApp(app);
  removeJs(app);
  /*
    if (isProduction) {
        globalObj.require.undef(app + '.min')
        globalObj.require.undef('css.min.js!' + app + '.min')
    }
    else {
        globalObj.require.undef(app)
        globalObj.require.undef('css.js!' + app)
    }*/
}

export default function removeApp(app) {
  const obj = appFactory.getApp(app);
  if (obj && obj.beforeRemove) {
    obj.beforeRemove().then(() => {
      removeInternal(app);
    });
  } else {
    removeInternal(app);
  }
}
