import { makeAutoObservable } from "mobx";
import MainService from "../services/MainService";
export default class CategoryStore{
    categories:object = [];

    constructor(){
        makeAutoObservable(this);
    }
    //Create catagory metod
    createCategory = async (data:object)=>{
        try{
            const response = await MainService.create('',data);
        }catch(err){
            console.log(err);
        }
    }
    //Get category metod
    getCategories = async ()=>{
        try{
            const response = await MainService.get('');
            this.categories = response.category;
        }catch(err){
            console.log(err);
        }
    }
}