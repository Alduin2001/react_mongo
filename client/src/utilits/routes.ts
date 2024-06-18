import { ComponentType } from "react";
import Home from "../components/main/home";
import Register from "../components/main/register";
import Auth from "../components/main/auth";
import NotFound from "../components/main/404";
import Profile from "../components/main/profile";
import Statistic from "../components/main/statistic";
import Courses from "../components/main/courses";
import CourseItem from "../components/main/courses/course";
import Reviews from "../components/main/reviews";
import Users from "../components/main/users/users";
import News from "../components/main/news/news";
import Themes from "../components/main/themes/themes";
import Exersice from "../components/main/exersices/exersices";
import homeSVG from '../assets/home.svg';

interface RouteType{
    icon:string,
    path:string;
    component:ComponentType<any> | string;
    name:string
}
export const ErrorPage:RouteType = {
    path:'*',
    component:NotFound,
    name:'Error'
}

export const AdminRoutes:RouteType[] = [
    {
        icon:homeSVG,
        path:'/course_item/:id',
        component:CourseItem,
        name:'Курс'
    },
    {
        icon:homeSVG,
        path:'/users',
        component:Users,
        name:'Пользователи'
    },
    {
        icon:homeSVG,
        path:'/themes',
        component:Themes,
        name:'Темы'
    },
    {
        icon:homeSVG,
        path:'/statistic',
        component:Statistic,
        name:'Статистика'
    },
    {
        icon:homeSVG,
        path:'/reviews',
        component:Reviews,
        name:'Отзывы'
    }
]
export const publicRoutes:RouteType[] = [
    {
        icon:homeSVG,
        path:'/',
        component:Home,
        name:'Главная'
    },
    {
        icon:homeSVG,
        path:'/exersice',
        component:Exersice,
        name:'Занятия'
    },
    {
        icon:homeSVG,
        path:'/news',
        component:News,
        name:'Новости'
    },
    {
        icon:homeSVG,
        path:'/courses',
        component:Courses,
        name:'Курсы'
    },
    {
        icon:homeSVG,
        path:'/course_item/:id',
        component:CourseItem,
        name:'Курс'
    },
    {
        icon:homeSVG,
        path:'/reviews',
        component:Reviews,
        name:'Отзывы'
    },
    {
        icon:homeSVG,
        path:'/register',
        component:Register,
        name:'Регистрация'
    },
    {
        icon:homeSVG,
        path:'/auth',
        component:Auth,
        name:'Авторизация'
    }
];

export const authRoutes:RouteType[] = [
    {
        icon:homeSVG,
        path:'/',
        component:Home,
        name:'Главная'
    },
    
    {
        icon:homeSVG,
        path:'/courses',
        component:Courses,
        name:'Курсы'
    },
    {
        icon:homeSVG,
        path:'/course_item/:id',
        component:CourseItem,
        name:'Курс'
    },
    {
        icon:homeSVG,
        path:'/profile',
        component:Profile,
        name:'Профиль'
    }
];

export const teacherRoutes:RouteType[] = [

];

export const editorRoutes:RouteType[] = [

];