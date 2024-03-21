import { ReactNode } from "react";

const Grid = ({className, style, children}: {className?: string, style?: any, children?: ReactNode}) => (
    <div className={`${className} w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4`} style={style}>
        {children}
    </div>
)

export default Grid