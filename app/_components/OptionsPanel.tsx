export type TLessonType = {
    value: string, 
    title: string,
    icon: string
}

const Option = ({option}: {option: TLessonType}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-center cursor-pointer">
                <img src={option.icon} className="w-[45px]"/>
            </div>
            <div className="flex flex-col justify-center cursor-pointer">
                <span className="text-center">
                    {option.title}
                </span>
            </div>
        </div>
    )
}

const OptionsPanel = ({options}: {options: TLessonType[]}) => {
    return (
        <div className="flex gap-10 flex-wrap">
            {
                options.map(option => {
                    return <Option key={option.value} option={option}/>
                })
            }
        </div>
    )
}

export default OptionsPanel