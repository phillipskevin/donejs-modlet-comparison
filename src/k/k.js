import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './k.less';
import view from './k.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-k component'
  }
});

export default Component.extend({
  tag: 'my-k',
  ViewModel,
  view
});
