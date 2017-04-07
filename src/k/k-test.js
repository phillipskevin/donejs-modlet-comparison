import QUnit from 'steal-qunit';
import { ViewModel } from './k';

// ViewModel unit tests
QUnit.module('donejs-hello-world/k');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-k component');
});
