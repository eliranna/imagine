import { TLessonSettings, useLessonGenerator } from "_services/useLessonGenerator"
import CreationPanelLayout from "./CreationPanelLayout"
import LessonCreationController from "./LessonCreationController"
import LessonCreationResultsPanel from "./LessonCreationResultsPanel"

const LessonCreationPanel = () => {

    const {lesson, isLoading, generate} = useLessonGenerator()
    
    const handleCreationRequest = (lessonSettings: TLessonSettings) => {
        generate(lessonSettings)
    }

    return (
        <div>
            <CreationPanelLayout controllerPanel={<LessonCreationController onCreate={handleCreationRequest}/>} resultsPanel={<LessonCreationResultsPanel lesson={lesson}/>}/>
        </div>
    )
}

export default LessonCreationPanel