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
    super('viralLoadTest')
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
      creatorReference : '1',
      owner : context.selectedPatient,
      labtest : {
       description: context.selectedDescription,
       result : 'asfasfsfa' ,
       "$class" : 'cloud.aperio.viiv.labTest',
       id :'`' + randomId + '`'
      }
    }
  }

  selectPatient(patient: IPatient) {
    this.selectedPatient = patient['firstName'];
  }

  selectDescription(value) {
    this.selectedDescription = value;
  }

  submitPrescription(){
    this.add();
  }

  afterAdd(){
    this.slideIndex = 2;
  }

  resetState(){
    this.slideIndex = 0;
    this.selectedPatient = '';
    this.selectedDescription = '';
  }
}

export const labResultsStore = new LabResultsStore();