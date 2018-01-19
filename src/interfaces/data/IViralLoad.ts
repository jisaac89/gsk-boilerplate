import {ILabTest} from './ILabTest';

export interface IViralLoad{
    labTestUUID ?: string;
    version ?: number;
    description ?: string;
    creatorReference ?: number;
    owner ?: string
    labTest ?: ILabTest;
}