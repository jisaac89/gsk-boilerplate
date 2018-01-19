import * as React from 'react';

import {Recoil, Table, Button, Toolbar, Input, Emerge, Layer, SlideIn, Loading, Open, Checkbox} from '../../../recoil/src/index';

import {observer} from 'mobx-react';

import {appStore, labResultsStore} from '../../stores/_GlobalStore';

import RouterButton from '../helpers/RouterButton';


@observer
export default class MenuPane extends React.Component<any, any> {
    render() {

        let {history} = this.props;

        return (
            <SlideIn className="z4" if={appStore.menu} from="bottom" fill>
                <Layer flexCenter fill flex theme="p10">
                    <RouterButton simple className="h100 w100" materialIcon size="xlarge" theme="primary" history={history} icon="opacity" route="/enter-lab-results" title="Enter lab results" />
                    {labResultsStore.list.length > 0 ? <RouterButton simple className="h100 w100" materialIcon size="xlarge" theme="primary" history={history} icon="visibility" route="/view-lab-results" title="View results" /> : null}
                </Layer>
            </SlideIn>
        )
    } 
}  