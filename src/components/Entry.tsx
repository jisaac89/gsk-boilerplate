import * as React from 'react';

import {Recoil, Layer} from '../../recoil/src/index';

import {observer} from 'mobx-react';

import {appStore} from '../stores/_GlobalStore';

import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './navigation/Header';
import LoadingPane from './navigation/LoadingPane';
import MenuPane from './navigation/MenuPane';

import Dashboard from './routes/Dashboard';
import LabResults from './routes/LabResults';
import ViewLabResults from './routes/ViewLabResults';

@observer
export default class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        appStore.initializeApp();
    }

    render() {
        
    let styles = {
        overflow : true,
        fill : true
    }

    return (
        <Router>
            <Recoil nightmode={appStore.nightmode} {...styles}>
                <Layer {...styles}>
                    <Layer flex {...styles}>
                        <Header />
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/enter-lab-results" component={LabResults} />
                        <Route path="/view-lab-results" component={ViewLabResults} />
                    </Layer>
                    <MenuPane history={this.props.history} />
                    <LoadingPane />
                </Layer>
            </Recoil>
        </Router>
        )
    } 
}