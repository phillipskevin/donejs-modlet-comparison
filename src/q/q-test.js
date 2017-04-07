import QUnit from 'steal-qunit';
import { ViewModel } from './q';

// ViewModel unit tests
QUnit.module('donejs-hello-world/q');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-q component');
});
