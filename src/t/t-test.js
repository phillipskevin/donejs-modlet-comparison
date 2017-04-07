import QUnit from 'steal-qunit';
import { ViewModel } from './t';

// ViewModel unit tests
QUnit.module('donejs-hello-world/t');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-t component');
});
