import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './p.less';
import view from './p.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-p component'
  }
});

export default Component.extend({
  tag: 'my-p',
  ViewModel,
  view
});
