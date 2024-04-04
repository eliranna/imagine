import LessonCreationPanel from "_components/LessonCreationPanel"
import Grid from "_components/base/Grid"
import { ReactNode, useState } from "react"

export type TCreationType = 'lesson' | 'images' | 'craft' | 'quizes'

type TCreationOption = {
    value: TCreationType,
    title: string,
    icon: string
}

const creationOptions: TCreationOption[] = [
    {
        value: 'lesson',
        title: 'מערך שיעור',
        icon: '/icons/lesson.png'
    },
    {
        value: 'images',
        title: 'תמונות למצגות',
        icon: '/icons/images.png'
    },
    {
        value: 'craft',
        title: 'דפי יצירה',
        icon: '/icons/paint.png'
    },
    {
        value: 'quizes',
        title: 'שאלונים ומשימות',
        icon: '/icons/pencil.png'
    },
]

const Option = ({option, selected, onClick}: {option: TCreationOption, selected: boolean, onClick: any}) => {
    return (
        <div className="flex flex-col justify-center gap-2" onClick={onClick}>
            <div className="flex justify-center flex-col items-center cursor-pointer h-[100px]">
                <img src={option.icon} className="w-[80px] h-auto"/>
            </div>
            <div className={`text-center cursor-pointer ${selected ? 'font-bold' : ''}`}>
                {option.title}
            </div>
        </div>
    )
}

const CreationOptions = ({selected, onChange}: {selected: TCreationType; onChange: any}) => {
    return (
        <div className="flex gap-16 w-fit">
            {
                creationOptions.map((option: TCreationOption) => {
                    return <Option selected={option.value === selected} option={option} onClick={() => onChange(option.value)}/>
                })
            }
        </div>
    )
}

const CreateMaterial = () => {

    const [type, setType] = useState<TCreationType>('lesson')

    return (
        <div className="flex flex-col gap-24">
            <div>
                <CreationOptions selected={type} onChange={(value: TCreationType) => setType(value)}/>
            </div>
            <div>
                {type === 'lesson' && <LessonCreationPanel/>}
            </div>
        </div>
    )
}

export default CreateMaterial