import QUnit from 'steal-qunit';
import { ViewModel } from './p';

// ViewModel unit tests
QUnit.module('donejs-hello-world/p');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the my-p component');
});
