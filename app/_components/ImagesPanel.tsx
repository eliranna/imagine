import Image from "./base/Image"

const ImagePane = ({allowScale = false, allowVariate = false, onScale, onVariate}: {allowScale?: boolean, allowVariate?: boolean, onScale: any, onVariate: any}) => {
    return (
        <div className="flex flex-col justify-center items-center w-1/2 h-1/2 cursor-pointer group">
            <div className="flex gap-10">
                {allowScale && (
                    <div onClick={onScale} className="w-[50px] h-[50px] rounded-full bg-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <img src={'/icons/scale.svg'} className="w-[25px]"/>
                    </div>
                )}
                {allowVariate && (
                    <div onClick={onVariate} className="w-[50px] h-[50px] rounded-full bg-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <img src={'/icons/variation.svg'} className="w-[25px]"/>
                    </div>
                )}
            </div>
        </div>
    )
}

const ImagesPanel = ({image, allowScale = false, allowVariate = false, onScale, onVariate}: {image: string, allowScale?: boolean, allowVariate?: boolean, onScale: any, onVariate: any}) => {
    return (
        <div className="relative w-[682px] h-[682px] bg-slate-100">
            {image && (
                <div className="relative w-full h-full">
                    <img className="w-full h-full absolute top-0 left-0 z-10" src={image}/>
                    <div className="w-full h-full absolute top-0 left-0 flex flex-wrap z-30">
                        {[0,1,2,3].map(index => <ImagePane allowScale={allowScale} allowVariate={allowVariate} onScale={() => onScale(index+1)} onVariate={() => onVariate(index+1)}/>)}
                    </div>   
                </div>
            )}        
        </div>
    )
}

export default ImagesPanel