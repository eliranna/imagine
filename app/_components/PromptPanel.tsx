import { useState } from "react"
import Button from "./base/Button"
import TextInput from "./base/TextInput"

const PromptPanel = ({onGenerate}: {onGenerate: any}) => {

    const [prompt, setPrompt] = useState<string>()
    
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="text-lg">
                    <TextInput placeholder="מה אתם מדמיינים?" onChange={(value: string) => setPrompt(value)}/>
                </div>
                <div className="flex justify-end">
                    <Button icon={'/icons/magic.svg'} onClick={() => onGenerate(prompt)}>
                        צרו את התמונה
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PromptPanel