import Controller from '@ember/controller';
import {action, observes} from 'ember-decorators/object';
import {alias} from 'ember-decorators/object/computed';
import {debug} from '@ember/debug';

export default class IndexController extends Controller {
  one = 'foo';
  @alias('one') two
  three = 'foo';


  @observes('one')
  oneObserver() {
    this.set('three', this.get('one'));
  }

  @observes('two')
  twoObserver() {
    this.set('three', this.get('two'));
  }

  @action
  handleClick() {
    this.set('one', 'bar');
    debug('handleClick');
  }
}
