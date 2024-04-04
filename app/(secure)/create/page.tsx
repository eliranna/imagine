'use client'

import LessonCreationPanel from "_components/LessonCreationPanel"
import Grid from "_components/base/Grid"
import { ReactNode } from "react"

type TCreationOption = {
    value: string,
    title: string,
    icon: string
}

const creationOptions = [
    {
        value: 'lesson',
        title: 'מערך שיעור',
        icon: '/icons/magic.svg'
    },
    {
        value: 'lesson',
        title: 'תמונות למצגות',
        icon: '/icons/magic.svg'
    },
    {
        value: 'lesson',
        title: 'דפי יצירה',
        icon: '/icons/magic.svg'
    },
    {
        value: 'lesson',
        title: 'ברכות',
        icon: '/icons/magic.svg'
    },
    {
        value: 'lesson',
        title: 'שאלונים ומשימות',
        icon: '/icons/magic.svg'
    },
    {
        value: 'lesson',
        title: 'מדבקות',
        icon: '/icons/magic.svg'
    }
]

const Option = ({option}: {option: TCreationOption}) => {
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="flex justify-center cursor-pointer">
                <img src={option.icon} className="w-[30px]"/>
            </div>
            <div className="text-center cursor-pointer">
                {option.title}
            </div>
        </div>
    )
}

const CreationOptions = () => {
    return (
        <div className="flex gap-16 w-fit">
            {
                creationOptions.map((option: TCreationOption) => {
                    return <Option option={option}/>
                })
            }
        </div>
    )
}

const Create = () => {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <CreationOptions/>
            </div>
            <div>
                <LessonCreationPanel/>
            </div>
        </div>
    )
}

export default Create