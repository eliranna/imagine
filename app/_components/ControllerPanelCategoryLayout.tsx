import { ReactNode } from "react"
import SecondaryTitle from "./base/SecondaryTitle"

const ControllerPanelCategoryLayout = ({title, children}: {title: string, children: ReactNode}) => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <SecondaryTitle>
                    {title}
                </SecondaryTitle>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ControllerPanelCategoryLayout