import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './s.less';
import view from './s.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-s component'
  }
});

export default Component.extend({
  tag: 'my-s',
  ViewModel,
  view
});
