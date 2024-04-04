import { TLessonSettings } from "_services/useLessonGenerator"
import ControllerPanelCategoryLayout from "./ControllerPanelCategoryLayout"
import OptionsPanel, { TLessonType } from "./OptionsPanel"
import Button from "./base/Button"
import SecondaryTitle from "./base/SecondaryTitle"
import TextInput from "./base/TextInput"
import { useState } from "react"
import SelectBox from "./base/SelectBox"

const lessonTypes: TLessonType[] = [
    {
        value: 'שיעור חשיפה',
        title: 'חשיפה',
        icon: '/icons/copy.svg'
    },
    {
        value: 'שיעור הקניית ידע',
        title: 'הקניית ידע',
        icon: '/icons/copy.svg'
    },
    {
        value: 'דיאלוג כיתתי',
        title: 'דיאלוג כיתתי',
        icon: '/icons/copy.svg'
    },
    {
        value: 'יצירה, פעילות מדעית',
        title: 'פעילות מעשית',
        icon: '/icons/copy.svg'
    },
    {
        value: 'דיאלוג כיתתי',
        title: 'פעילות יצירה',
        icon: '/icons/copy.svg'
    },
    {
        value: 'דיאלוג כיתתי',
        title: 'שיעור שטח',
        icon: '/icons/copy.svg'
    },
]

const LessonCreationController = ({onCreate}: {onCreate: (lessonSettings: TLessonSettings) => void}) => {

    const [topic, setTopic] = useState<string | null>(null)
    const [type, setType] = useState<string | undefined>(undefined)
    const [grade, setGrade] = useState<string | undefined>(undefined)
    const [duration, setDuration] = useState<string | undefined>(undefined)
    const [focuseOn, setFocuseOn] = useState<string | undefined>(undefined)
    const [additionalInfo, setAdditionalInfo] = useState<string | undefined>(undefined)

    const handleCreate = () => {
        if (!topic || !grade) {
            return
        }
        onCreate({
            topic,
            type,
            grade,
            duration,
            focuseOn,
            additionalInfo
        })
    }
    
    return (
        <div className="flex flex-col gap-16">
            <ControllerPanelCategoryLayout title={"נושא השיעור"}>
                <TextInput onChange={(value: string) => setTopic(value)}/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"שכבת הגיל"}>
                <TextInput onChange={(value: string) => setGrade(value)}/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"משך השיעור"}>
                <SelectBox options={[
                    'שעה',
                    'שעתיים',
                    'שלוש שעות',
                    'ארבע שעות',
                    'חמש שעות',
                    'יום שלם'
                ]} onChange={(duration: string) => setDuration(duration)}/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"אופי השיעור"}>
                <OptionsPanel options={lessonTypes} onChange={(value: string) => setType(value)}/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"נושאי מיקוד"}>
                <TextInput onChange={(value: string) => setFocuseOn(value)} rows={3}/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"בקשות נוספות"}>
                <TextInput onChange={(value: string) => setGrade(value)} rows={5}/>
            </ControllerPanelCategoryLayout>
            <div>
                <Button icon={"/icons/magic.svg"} onClick={() => handleCreate()}>
                    צור מערך שיעור
                </Button>
            </div>
        </div>
    )
}

export default LessonCreationController