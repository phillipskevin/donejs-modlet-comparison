import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './r.less';
import view from './r.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-r component'
  }
});

export default Component.extend({
  tag: 'my-r',
  ViewModel,
  view
});
