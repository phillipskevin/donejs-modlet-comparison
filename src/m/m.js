import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './m.less';
import view from './m.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-m component'
  }
});

export default Component.extend({
  tag: 'my-m',
  ViewModel,
  view
});
