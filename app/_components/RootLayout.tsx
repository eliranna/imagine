import { ReactNode } from 'react';
import PageHead from './base/PageHead';
import Navbar from './Navbar';

export default function RootLayout ({ title, hideFooter, children }: {title?: string, hideFooter?: boolean, children: ReactNode}) {
    return (
        <div dir={'rtl'} lang={'he'}>
            <PageHead title={title}/>
            <div>
                <div className={`min-h-screen ${!hideFooter && 'mb-20'}`}>
                    <div>
                        <Navbar/>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
                {!hideFooter &&(
                    <div className='bg-black h-[200px] w-full'>
                    
                    </div>
                )}                
            </div>
        </div>
    )
}