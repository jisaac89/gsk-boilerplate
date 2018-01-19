import {observable, computed, ObservableMap, toJS} from 'mobx';

import {ILabResultsStore} from '../interfaces/ILabResultsStore';
import BaseStore from './BaseStore';
import { IPatient } from '../interfaces/data/IPatient';

export class LabResultsStore extends BaseStore {

  @observable slideIndex : number = 0;

  // 

  @observable selectedPatient : string = '';
  @observable selectedDescription : string = ''

  constructor(){
    super('lab-results')
  }

  gotoSlideIndex(n: number){
    this.slideIndex = n;
  }

  addObject(){

    const context = this;

    let randomId = Math.random().toString();

    return {
      labTestUUID : '`' + randomId + '`',
      version : '1',
      description : context.selectedDescription,
      creatorReference : '1',
      owner : context.selectedPatient['$class'],
      labTest : {
       description: '',
       result : '' 
      }
    }
  }

  selectPatient(patient: IPatient) {
    this.selectedPatient = patient['$class'];
  }

  selectDescription(value) {
    this.selectedPatient = value;
  }

  submitPrescription(){
    this.add();
  }

  afterAdd(){
    this.slideIndex = 2;
  }
}

export const labResultsStore = new LabResultsStore();