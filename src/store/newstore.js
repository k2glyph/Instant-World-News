import { observable, autorun } from 'mobx';

class NewsStore {
     @observable news=[];
     @observable filter="";
}
var store = window.store= new NewsStore;

export default store;

autorun((()=> {
    console.log(store.news);
});