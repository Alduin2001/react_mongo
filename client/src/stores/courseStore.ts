import { makeAutoObservable } from "mobx";
import MainService from "../services/MainService";

export default class CourseStore{
    public courses = [];

    constructor(){
        makeAutoObservable(this);
    }
    // Metod of mobx for create course
    public createCourse = async (data:object,token:string) =>{
        try{
            const response = await MainService.create('course/create',data,token);
            return response.msg;
        }catch(err){
            return err;
        }
    }
    public getCourses = async ()=>{
        try{
            const response = await MainService.get('course/read');
            this.courses = response.course;
            console.log(response.course);
        }catch(err){
            console.log(err);
        }
    }
    public updateCourse = async ()=>{
        
    }
    public deleteCourse = async ()=>{

    }



}