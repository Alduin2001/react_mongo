import React, { FC, useState } from "react";
import ExersiceItem from "../exersice_item/exersice_item";
import Theme from "../../themes/theme/theme";
import { observer } from "mobx-react";
import {motion} from 'framer-motion';
interface ExersicesThemeProps {
    data: {
        theme: string,
        number: number[],
        exersice: string[],
        content: string[]
    }
}
const ExersicesTheme: FC<ExersicesThemeProps> = observer(({ data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const OpenExersices = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div onClick={OpenExersices}>
            <Theme name={data.theme} />
            </div>
            {isOpen && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}}>
                    <ExersiceItem number={data.number[0]} exersice={data.exersice[0]} content={data.content[0]} />
                    <ExersiceItem number={data.number[1]} exersice={data.exersice[1]} content={data.content[1]} />
                </motion.div>
            )}
        </div>
    )
})

export default ExersicesTheme;