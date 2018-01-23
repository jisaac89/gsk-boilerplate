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
  @observable selectedStartDate : Date = new Date();
  @observable selectStartDateOpen : boolean = false;

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
      "$class": "cloud.aperio.viiv.viralLoadTest",
      labTestUUID : '`' + randomId + '`',
      version : 2,
      description : context.selectedDescription,
      creatorReference : '1',
      owner : context.selectedPatient,
      labtest : {
       description: context.selectedDescription,
       result : 'asfasfsfa' ,
       "$class" : 'cloud.aperio.viiv.Labtest',
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

  selectStartDate(date) {
    this.selectedStartDate = date;
  }

  toggleStartDateDropdown(){
    this.selectStartDateOpen = !this.selectStartDateOpen;
  }
}

export const labResultsStore = new LabResultsStore();