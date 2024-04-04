export type TLessonType = {
    value: string, 
    title: string,
    icon: string
}

const Option = ({option, selected, onClick}: {option: TLessonType, selected: boolean, onClick: any}) => {
    return (
        <div className="flex flex-col gap-2" onClick={onClick}>
            <div className="flex justify-center cursor-pointer">
                <img src={option.icon} className="w-[45px]"/>
            </div>
            <div className="flex flex-col justify-center cursor-pointer">
                <span className={`text-center ${selected ? 'font-bold' : ''}`}>
                    {option.title}
                </span>
            </div>
        </div>
    )
}

const OptionsPanel = ({options, selectedValue, onChange}: {options: TLessonType[], selectedValue: string | undefined, onChange: any}) => {
    return (
        <div className="flex gap-10 flex-wrap">
            {
                options.map((option, index) => {
                    return <Option key={option.value} option={option} selected={selectedValue ? option.value === selectedValue : false} onClick={() => onChange(option.value)}/>
                })
            }
        </div>
    )
}

export default OptionsPanel