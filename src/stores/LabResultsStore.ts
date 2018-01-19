import {observable, computed, ObservableMap, toJS} from 'mobx';

import {ILabResultsStore} from '../interfaces/ILabResultsStore';
import BaseStore from './BaseStore';
import { IPatient } from '../interfaces/data/IPatient';
import { IViralLoad} from '../interfaces/data/IViralLoad';

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

    return<IViralLoad> {
      labTestUUID : '`' + randomId + '`',
      version : 2,
      description : context.selectedDescription,
      creatorReference : 1,
      owner : context.selectedPatient['firstName'],
      labTest : {
       description: '',
       result : '' 
      }
    }
  }

  selectPatient(patient: IPatient) {
    this.selectedPatient = patient['firstName'];
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