import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window.jasmineRequire = jasmineRequire;
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import './polyfills';
import './app/services/user.service.spec'
bootstrap();
function bootstrap () {
  if (window.jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload();
    window.jasmineRef = jasmine.getEnv();
  }
}

