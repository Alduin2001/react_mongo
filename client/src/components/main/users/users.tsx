import React,{FC} from "react";
import { observer } from "mobx-react";
import UserItem from "./user_item/user_item";
import UserFilter from "./user_filter/user_filter";
import AddUser from "./add_user/add_user";
import {motion} from 'framer-motion';
const Users:FC = observer(()=>{
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3,duration:1}} className="w-full grid grid-rows-2 gap-2 p-2">
            <AddUser/>
            <div className="w-full grid grid-cols-1 gap-2 p-2 md:grid-cols-2">
            <UserFilter/>
            <motion.div initial={{x:1000}} animate={{x:0}} transition={{duration:1}} className="w-full grid grid-cols-2 gap-2">

                <UserItem firstname="Al" lastname="M" login="log" />
                <UserItem firstname="Al" lastname="M" login="log" />
                <UserItem firstname="Al" lastname="M" login="log" />
                <UserItem firstname="Al" lastname="M" login="log" />
                <UserItem firstname="Al" lastname="M" login="log" />
            </motion.div>
            </div>
        </motion.section>
    )
});

export default Users;