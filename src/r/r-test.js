import QUnit from 'steal-qunit';
import { ViewModel } from './r';

// ViewModel unit tests
QUnit.module('donejs-hello-world/r');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-r component');
});
