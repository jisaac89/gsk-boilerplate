import {ILabTest} from './ILabTest';

export interface IPrescription{
    labTestUUID ?: string;
    version ?: number;
    description ?: string;
    creatorReference ?: number;
    owner ?: string
    labTest ?: ILabTest;
}