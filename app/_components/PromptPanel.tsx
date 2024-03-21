import { useEffect, useState } from "react"
import Button from "./base/Button"
import TextInput from "./base/TextInput"

const PromptPanel = ({progress, isAllowed, onGenerate}: {progress?: number | null, isAllowed: boolean | null, onGenerate: any}) => {

    const [prompt, setPrompt] = useState<string>()

    const isLoading = () => (progress != null) && (progress < 100)
    
    return (
        <div>
            <div className="flex flex-col gap-4">
                <div className="text-lg">
                    <TextInput placeholder="מה אתם מדמיינים?" rows={5} onChange={(value: string) => setPrompt(value)}/>
                </div>
                {(isAllowed === false) && (
                    <div>
                        <span>
                            מצטערים, מנוע הבינה המלאכותית שלנו מאמין כי תיאור התמונה שלכם אינו חינוכי. אנא, נסו שנית. 
                        </span>
                    </div>
                )}
                <div className="flex justify-end">
                    <Button icon={'/icons/magic.svg'} disabled={!prompt || prompt == ''} onClick={() => onGenerate(prompt)} processing={isLoading()}>
                        {isLoading() ? `${progress}%` : 'צרו את התמונה'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PromptPanel