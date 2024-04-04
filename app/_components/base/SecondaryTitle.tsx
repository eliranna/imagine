import { ReactNode } from "react"

const SecondaryTitle = ({children}: {children: ReactNode}) => {
    return (
        <div className="font-semibold">
            {children}
        </div>
    )
}

export default SecondaryTitle