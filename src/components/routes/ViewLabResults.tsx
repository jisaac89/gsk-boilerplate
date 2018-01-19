
import * as React from 'react';

import { Recoil, Table, Button, Wizard, Toolbar, Input,Dropdown, Emerge, Layer, SlideIn, Loading, Open, Checkbox } from '../../../recoil/src/index';

import { observer } from 'mobx-react';

import { appStore, labResultsStore, patientsStore } from '../../stores/_GlobalStore';
import Stepper from '../../../recoil/src/components/Stepper/Stepper';

@observer
export default class Message extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    gotoSlideIndex(n: number) {
        labResultsStore.gotoSlideIndex(n);
    }

    selectPatient(patient){
        labResultsStore.selectPatient(patient);
    }

    render() {
        return (
            <SlideIn fill className="z3" if={!appStore.menu} from="top">
                <Layer fill flexCenter>
                    <Emerge enter="fadeIn" exit={'fadeOut'} if={labResultsStore.slideIndex === 0 && !appStore.menu}>
                        <Layer className="w500px center-width">
                            <i className="material-icons super-xl mb20">visibility</i>
                            <h2 className="mb20">Lab results</h2>
                            <h1 className="mb20">
                                Below is a list of recently sent results.
                            </h1>
                            <Layer className="text-left">
                                <Table overflow dataSource={labResultsStore.list} />
                            </Layer> 
                        </Layer>
                    </Emerge>
                </Layer>
            </SlideIn>
        )
    }
}