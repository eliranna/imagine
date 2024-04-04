import Markdown from "./base/Markdown"

const LessonCreationResultsPanel = ({lesson}: {lesson: string | null}) => {
    return (
        <div className="border border-[#eee] rounded-lg h-full p-10">
            <Markdown>
                {lesson}
            </Markdown>
            
        </div>
    )
}

export default LessonCreationResultsPanel