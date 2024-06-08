import { ComponentType } from "react";
import Home from "../components/main/home";
import Register from "../components/main/register";
import Auth from "../components/main/auth";
import NotFound from "../components/main/404";
import Profile from "../components/main/profile";
import Statistic from "../components/main/statistic";
import Courses from "../components/main/courses";
import CourseItem from "../components/main/courses/course";
interface RouteType{
    path:string;
    component:ComponentType<any> | string;
    name:string
}
export const ErrorPage:RouteType = {
    path:'*',
    component:NotFound,
    name:'Error'
}

export const publicRoutes:RouteType[] = [
    {
        path:'/',
        component:Home,
        name:'Главная'
    },
    {
        path:'/courses',
        component:Courses,
        name:'Курсы'
    },
    {
        path:'/course_item/:id',
        component:CourseItem,
        name:'Курс'
    },
    {
        path:'/statistic',
        component:Statistic,
        name:'Статистика'
    },
    {
        path:'/register',
        component:Register,
        name:'Регистрация'
    },
    {
        path:'/auth',
        component:Auth,
        name:'Авторизация'
    }
];

export const authRoutes:RouteType[] = [
    {
        path:'/',
        component:Home,
        name:'Главная'
    },
    
    {
        path:'/courses',
        component:Courses,
        name:'Курсы'
    },
    {
        path:'/course_item/:id',
        component:CourseItem,
        name:'Курс'
    },
    {
        path:'/profile',
        component:Profile,
        name:'Профиль'
    }
];