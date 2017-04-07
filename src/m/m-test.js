import QUnit from 'steal-qunit';
import { ViewModel } from './m';

// ViewModel unit tests
QUnit.module('donejs-hello-world/m');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-m component');
});
