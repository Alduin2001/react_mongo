import UserStore from "./userStore";
import CategoryStore from "./categoryStore";
export default class RootStore{
    userStore:UserStore;
    categoryStore:CategoryStore;

    constructor(){
        this.userStore = new UserStore();
        this.categoryStore = new CategoryStore();
    }
}