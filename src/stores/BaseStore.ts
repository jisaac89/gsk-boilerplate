import {observable, computed, ObservableMap, toJS} from 'mobx';

import Store from './_Store';

export default abstract class BaseStore extends Store{

    ref: string;

    @observable list : Array<Object> = [];
    @observable listItem : ObservableMap<Object> = new ObservableMap({});

    @observable loading : boolean = true;

    constructor(ref : string) {
        super(ref);
    }

    init() {
        const self = this;
        self.loadNewPage();
    }

    loadNewPage() {
        const self = this;
        // load the database ref with this.ref here
        fetch('https://www.reddit.com/r/redditdev/top.json')
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
      
            // Examine the text in the response
            response.json().then(function(data) {
              self.list = data.data.children;
              console.log(self.list)
            });
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
        // set json data to this.list

        this.loading = false;
    }

    async add() : Promise<any> {

    };

    async update(id : string, object: Object) {

    };

    async del(id : string) {

    };

    async clearAll(){

    }

}