const SelectBox = ({options, onChange}: {options: string[], onChange?: any}) => {
    return (
        <select className="bg-gray-50 px-4 py-3" onChange={(event) => onChange(event.target.value)}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default SelectBox