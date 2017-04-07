import QUnit from 'steal-qunit';
import { ViewModel } from './o';

// ViewModel unit tests
QUnit.module('donejs-hello-world/o');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-o component');
});
