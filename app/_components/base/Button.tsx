import { ReactNode } from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  processing?: boolean; 
  disabled?: boolean; 
  children: ReactNode, 
  icon?: string, 
  secondary?: boolean, 
  onClick?: any
}

const RunButton = ({
  processing, 
  disabled, 
  children, 
  icon, 
  secondary, 
  onClick
}: ButtonProps) => {
    return (
      <div className={`${secondary ? 'bg-white border border-black' : 'bg-black'} ${secondary ? 'text-black' : 'text-white'} rounded-full w-fit flex gap-2 py-2 px-4 h-[41px] transition-all justify-center items-center ${processing ? 'cursor-default w-[41px]' : 'w-[116.4px] cursor-pointer'}`} onClick={!processing ? onClick : null}>
        <div>
          {processing ? <Spinner/> : <img src={icon} className={`w-[25px] ${!secondary && 'invert'}`}/>}
        </div>
          <div>
            {children}
          </div>
      </div>
    )
}

export default RunButton