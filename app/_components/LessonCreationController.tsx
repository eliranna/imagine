import ControllerPanelCategoryLayout from "./ControllerPanelCategoryLayout"
import OptionsPanel, { TLessonType } from "./OptionsPanel"
import SecondaryTitle from "./base/SecondaryTitle"
import TextInput from "./base/TextInput"

const lessonTypes: TLessonType[] = [
    {
        value: 'exposure',
        title: 'חשיפה',
        icon: '/icons/copy.svg'
    },
    {
        value: 'knowladge',
        title: 'הקניית ידע',
        icon: '/icons/copy.svg'
    },
    {
        value: 'dialoge',
        title: 'דיאלוג כיתתי',
        icon: '/icons/copy.svg'
    },
    {
        value: 'knowladge',
        title: 'הקניית ידע',
        icon: '/icons/copy.svg'
    },
    {
        value: 'dialoge',
        title: 'דיאלוג כיתתי',
        icon: '/icons/copy.svg'
    }
]

const LessonCreationController = () => {
    return (
        <div className="flex flex-col gap-16">
            <ControllerPanelCategoryLayout title={"תיאור השיעור"}>
                <TextInput/>
            </ControllerPanelCategoryLayout>
            <ControllerPanelCategoryLayout title={"אופי השיעור"}>
                <OptionsPanel options={lessonTypes}/>
            </ControllerPanelCategoryLayout>
        </div>
    )
}

export default LessonCreationController