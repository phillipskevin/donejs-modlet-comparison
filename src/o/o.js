import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './o.less';
import view from './o.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-o component'
  }
});

export default Component.extend({
  tag: 'my-o',
  ViewModel,
  view
});
