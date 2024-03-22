import { ResultType } from "_services/useImageGenerator"

const RoundButton = ({icon, onClick}: {icon: string, onClick: any}) => {
    return (
        <div onClick={onClick} className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <img src={icon} className="w-[25px]"/>
        </div>        
    )
}

const ImagePane = ({className, resultType, onScale, onVariate, onDownload, onCopy}: {className: string, resultType: ResultType | null, onScale?: any, onVariate?: any, onDownload?: any, onCopy?: any}) => {
    return (
        <div className={`flex flex-col justify-start items-start ${className} group p-4`}>
            <div className="flex gap-6">
                {resultType === 'draft' && (
                    <RoundButton icon={"/icons/scale.svg"} onClick={onScale}/>
                )}
                {resultType === 'draft' && (
                    <RoundButton icon={"/icons/variation.svg"} onClick={onVariate}/>
                )}
                {resultType === 'final' && (
                    <RoundButton icon={"/icons/download.svg"} onClick={onDownload}/>
                )}  
                {resultType === 'final' && (
                    <RoundButton icon={"/icons/copy.svg"} onClick={onCopy}/>
                )}                
            </div>
        </div>
    )
}

const ImagesPanel = ({image, resultType, onScale, onVariate, onDownload, onCopy}: {image: string, resultType: ResultType | null, onScale?: any, onVariate?: any, onDownload?: any, onCopy?: any}) => {
    return (
        <div className="relative w-[682px] h-[682px] bg-slate-100">
            {image && (
                <div className="relative w-full h-full">
                    <img className="w-full h-full absolute top-0 left-0 z-10" src={image}/>
                    <div className="w-full h-full absolute top-0 left-0 flex flex-wrap z-30">
                        {resultType === 'draft' && [2,1,4,3].map(index => 
                            <ImagePane 
                                className='w-1/2 h-1/2'
                                key={`image-${index}`} 
                                resultType={resultType} 
                                onScale={() => onScale(index)} 
                                onVariate={() => onVariate(index+1)}/>
                        )}
                        {resultType === 'final' && <ImagePane 
                                className="w-full h-full"
                                key={`image-${image}`} 
                                resultType={resultType} 
                                onDownload={() => onDownload()}
                                onCopy={() => onCopy()}
                                />
                        }                        
                    </div>   
                </div>
            )}        
        </div>
    )
}

export default ImagesPanel