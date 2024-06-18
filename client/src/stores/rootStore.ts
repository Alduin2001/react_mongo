import UserStore from "./userStore";
import CourseStore from "./courseStore";
export default class RootStore{
    userStore:UserStore;
    courseStore:CourseStore;
    constructor(){
        this.userStore = new UserStore();
        this.courseStore = new CourseStore();
    }
}