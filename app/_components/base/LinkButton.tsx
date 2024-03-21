import { ReactNode } from "react"

const Button = ({icon, children, underline, onClick}: {icon?: string, children: ReactNode, underline?: boolean, onClick?: any}) => (
    <div className='flex gap-1 w-fit cursor-pointer' onClick={onClick}>
        <div>
            <span className={`${underline && 'border-b pb-1 border-black'}`}>
                {children}
            </span>
        </div>
        {icon && (
            <div className='flex flex-col justify-center'>
                <img className={`w-[18px] dark-gray-color`} src={icon} />
            </div>
        )}
    </div>    
)

export default Button