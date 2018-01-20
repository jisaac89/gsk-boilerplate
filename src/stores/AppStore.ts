import {observable, computed} from 'mobx';
import {labResultsStore, patientsStore} from './_GlobalStore';


export class AppStore {
    
    @observable nightmode = false;
    @observable mobile = false;
    @observable menu = false;
    @observable loading = false;

    constructor() {
        const self = this;
    }

    initializeApp() {
        labResultsStore.init();
        patientsStore.init();
    }

    toggleNightmode(){
        this.nightmode = !this.nightmode;
    }

    toggleMenu(){
        this.menu = !this.menu;
        labResultsStore.resetState();
    }

}

export const appStore = new AppStore();