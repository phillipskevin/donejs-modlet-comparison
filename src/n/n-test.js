import QUnit from 'steal-qunit';
import { ViewModel } from './n';

// ViewModel unit tests
QUnit.module('donejs-hello-world/n');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-n component');
});
