import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './t.less';
import view from './t.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-t component'
  }
});

export default Component.extend({
  tag: 'my-t',
  ViewModel,
  view
});
