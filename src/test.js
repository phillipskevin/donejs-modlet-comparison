import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-hello-world/models/test';

import 'donejs-hello-world/k/k-test';

import 'donejs-hello-world/l/l-test';

import 'donejs-hello-world/m/m-test';

import 'donejs-hello-world/n/n-test';

import 'donejs-hello-world/o/o-test';

import 'donejs-hello-world/p/p-test';

import 'donejs-hello-world/q/q-test';

import 'donejs-hello-world/r/r-test';

import 'donejs-hello-world/s/s-test';

import 'donejs-hello-world/t/t-test';

import 'donejs-hello-world/u/u-test';

import 'donejs-hello-world/v/v-test';

import 'donejs-hello-world/w/w-test';

import 'donejs-hello-world/x/x-test';

F.attach(QUnit);

QUnit.module('donejs-hello-world functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-hello-world main page shows up', function() {
  F('title').text('donejs-hello-world', 'Title is set');
});
