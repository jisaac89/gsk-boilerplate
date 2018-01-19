
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

    submitPrescription(){
        labResultsStore.submitPrescription();
    }

    render() {
        return (
            <SlideIn fill className="z3" if={!appStore.menu} from="top">
                <Layer fill flex>
                    <Layer block fill className="mt50">

                        <Wizard fill slideIndex={labResultsStore.slideIndex}>
                            <Layer fill flexCenter>
                                <Emerge enter="fadeIn" exit={'fadeOut'} if={labResultsStore.slideIndex === 0 && !appStore.menu}>
                                    <Layer>
                                        <i className="material-icons super-xl mb20">opacity</i>
                                        <h2 className="mb20">Enter patient lab results</h2>
                                        <h1 className="mb20">
                                            We just need a few things to get started:
                                        </h1>

                                        <Button theme="primary" simple icon="check"> Patient ID</Button>
                                        <Button theme="primary" simple icon="check"> Lab reference number</Button>
                                        <Button theme="primary" simple icon="check"> Lab test date</Button>
                                        <Button theme="primary" simple icon="check"> Lab results for selected patient</Button>

                                        <Toolbar block size="large" className="mt20">
                                            <Button className="ps40" onClick={this.gotoSlideIndex.bind(this, 1)} icon="chevron-right" theme="primary">Continue</Button>
                                        </Toolbar>
                                    </Layer>
                                </Emerge>
                            </Layer>
                            <Layer fill flexCenter>
                                <Emerge enter="fadeIn">
                            
                                    <Layer className="w400px text-center center-width p10">

                                        <i className="material-icons super-xl mb20">group</i>
                                        <h2 className="mb20">Enter your patient results</h2>

                                        <Toolbar block vertical spacing className="mt10">
                                            <Dropdown  searchTitle={"Search by patient name."} searchableKeys={['$class']} block columns={[{name:'$class', title: 'Patient name'}]} title={labResultsStore.selectedPatient ? labResultsStore.selectedPatient : "Select Patient"} rowIsSelectable="single" onChange={this.selectPatient.bind(this)} mobile dataSource={patientsStore.list} />
                                            <Input block placeholder="Prescription Information" />
                                            <Input block placeholder="Item Master Information" />
                                            <Input block placeholder="Testing ID" />
                                        </Toolbar>

                                        <Toolbar size="large" block flex textCenter spacing className="mt20">
                                            <Button block onClick={this.gotoSlideIndex.bind(this, 0)} icon="chevron-left">Cancel</Button>
                                            <Button block onClick={this.submitPrescription.bind(this)} icon="chevron-right" theme="primary">Submit</Button>
                                        </Toolbar>
                                    </Layer>

                                </Emerge>
                            </Layer>
                            <Layer fill flexCenter>
                                <Emerge enter="fadeIn">
                                    <Layer className="w400px text-center center-width p10">
                                        <i className="material-icons super-xl mb20">check</i>
                                        <h2 className="mb20">Confirm form submission.</h2>
                                    </Layer>
                                </Emerge>
                            </Layer>
                        </Wizard>
                    </Layer>
                </Layer>
            </SlideIn>
        )
    }
} 
{/* <Input focusOnMount={labResultsStore.slideIndex===1} block placeholder="Patient ID" /> */}

// <Table columns={[{name: 'data'}]} dataSource={labResultsStore.list} />

// This wizard will take you through the process of entering patient lab results.
// 
                             

{/* <Emerge enter="fadeInDownBig" exit={'fadeOutUpBig'} if={labResultsStore.slideIndex === 0 && !appStore.menu}>
<Layer className="p10 mt20 w1000px center-width">
    <Stepper stepIndex={labResultsStore.slideIndex}>
        <Button onClick={this.gotoSlideIndex.bind(this, 0)} theme={labResultsStore.slideIndex === 0 ? "primary" : "default"}>Intro</Button>
        <Button onClick={this.gotoSlideIndex.bind(this, 1)} theme={labResultsStore.slideIndex === 1 ? "primary" : "default"}>Lab Results</Button>
        <Button onClick={this.gotoSlideIndex.bind(this, 2)} theme={labResultsStore.slideIndex === 2 ? "primary" : "default"}>Confirm Results</Button>
    </Stepper>
</Layer>
</Emerge> */}