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
        icon: '/icons/lesson.png'
    },
    {
        value: 'lesson',
        title: 'תמונות למצגות',
        icon: '/icons/images.png'
    },
    {
        value: 'lesson',
        title: 'דפי יצירה',
        icon: '/icons/paint.png'
    },
    {
        value: 'lesson',
        title: 'שאלונים ומשימות',
        icon: '/icons/pencil.png'
    },
]

const Option = ({option}: {option: TCreationOption}) => {
    return (
        <div className="flex flex-col justify-center gap-2">
            <div className="flex justify-center flex-col items-center cursor-pointer h-[100px]">
                <img src={option.icon} className="w-[80px] h-auto"/>
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
        <div className="flex flex-col gap-24">
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