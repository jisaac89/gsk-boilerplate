import {observable, computed} from 'mobx';
import {labResultsStore} from './_GlobalStore';


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
    }

    toggleNightmode(){
        this.nightmode = !this.nightmode;
    }

    toggleMenu(){
        this.menu = !this.menu;
    }

}

export const appStore = new AppStore();