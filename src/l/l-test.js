import QUnit from 'steal-qunit';
import { ViewModel } from './l';

// ViewModel unit tests
QUnit.module('donejs-hello-world/l');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-l component');
});
