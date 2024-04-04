import { ReactNode } from "react"

const SecondaryTitle = ({children}: {children: ReactNode}) => {
    return (
        <div className="font-bold">
            {children}
        </div>
    )
}

export default SecondaryTitle