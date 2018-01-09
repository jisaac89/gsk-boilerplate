import {observable, computed, ObservableMap, toJS} from 'mobx';

import {ILabResultsStore} from '../interfaces/ILabResultsStore';
import BaseStore from './BaseStore';

export class LabResultsStore extends BaseStore {

  @observable slideIndex : number = 0;

  constructor(){
    super('lab-results')
  }

  gotoSlideIndex(n: number){
    this.slideIndex = n;
  }
}

export const labResultsStore = new LabResultsStore();