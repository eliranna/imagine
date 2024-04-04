const LessonCreationResultsPanel = ({lesson}: {lesson: string | null}) => {
    return (
        <div className="border border-[#eee] rounded-lg h-full">
            
            {lesson}
        </div>
    )
}

export default LessonCreationResultsPanel