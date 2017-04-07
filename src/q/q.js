import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './q.less';
import view from './q.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-q component'
  }
});

export default Component.extend({
  tag: 'my-q',
  ViewModel,
  view
});
