import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './l.less';
import view from './l.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-l component'
  }
});

export default Component.extend({
  tag: 'my-l',
  ViewModel,
  view
});
