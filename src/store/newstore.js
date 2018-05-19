import { observable } from 'mobx';

class NewsStore {
     @observable news=[];
     @observable filter="bbc-news";
     @observable count=0;
}
var store = window.store= new NewsStore();

export default store;
