import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './n.less';
import view from './n.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-n component'
  }
});

export default Component.extend({
  tag: 'my-n',
  ViewModel,
  view
});
