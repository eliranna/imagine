import CreationPanelLayout from "./CreationPanelLayout"
import LessonCreationController from "./LessonCreationController"
import LessonCreationResultsPanel from "./LessonCreationResultsPanel"

const LessonCreationPanel = () => {
    return (
        <div>
            <CreationPanelLayout controllerPanel={<LessonCreationController/>} resultsPanel={<LessonCreationResultsPanel/>}/>
        </div>
    )
}

export default LessonCreationPanel