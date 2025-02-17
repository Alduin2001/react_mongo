import { makeAutoObservable } from "mobx";
import MainService from "../services/MainService";

export default class UserStore {
    public isAuth: boolean = !!localStorage.getItem('auth');
    public token: string = localStorage.getItem('token') || '';

    constructor() {
        makeAutoObservable(this);
        console.log(this.isAuth);
    }
    // Metod for mobx to registration
    public createUser = async (data: object) => {
        try {
            const response = await MainService.create('users/create', data);
            return response.msg;
        } catch (err) {
            return err;
        }
    }
    // Metod for mobx to get users
    public getUsers = async () => {
        try {
            const response = await MainService.get('');
            return response;
        } catch (err) {
            console.log(err);
        }
    }
    // Metod for mobx to authorization
    public authUser = async (data: object) => {
        try {
            const response = await MainService.auth('users/auth', data);
            this.setToken(response.token);
            this.setAuth(true);
            return response.token;
        } catch (err) {
            return err;
        }
    }
    // Metod for mobx to logout
    public logoutUser = (): void => {
        this.removeAuth(false);
        this.removeToken('');
    }

    // Privates
    private setAuth = (isAuth: boolean): void => {
        this.isAuth = isAuth;
        localStorage.setItem('auth', String(isAuth));
    }
    private removeAuth = (isAuth:boolean):void =>{
        this.isAuth = isAuth;
        localStorage.removeItem('auth');
    }
    private setToken = (token:string):void =>{
        this.token = token;
        localStorage.setItem('token',token);
    }
    private removeToken = (token:string):void=>{
        this.token = token;
        localStorage.removeItem('token');
    }
}