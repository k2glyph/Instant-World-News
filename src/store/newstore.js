import { observable, autorun } from 'mobx';

class NewsStore {
     @observable news=[];
     @observable filter="";
     @observable count=0;
}
var store = window.store= new NewsStore;

export default store;
