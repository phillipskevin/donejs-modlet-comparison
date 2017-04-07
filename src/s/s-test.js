import QUnit from 'steal-qunit';
import { ViewModel } from './s';

// ViewModel unit tests
QUnit.module('donejs-hello-world/s');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-s component');
});
