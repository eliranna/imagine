import { ReactNode, Suspense } from 'react';
import PageHead from './base/PageHead';
import Grid from './base/Grid';
import Sidebar from './Sidebar';
import Spinner from './base/Spinner';
import { Page } from './base/Page';

export default function RootLayout ({ title, hideFooter, children }: {title?: string, hideFooter?: boolean, children: ReactNode}) {
    return (
        <div dir={'rtl'} lang={'he'}>
            <PageHead title={title}/>
            <div className='min-h-screen'>
              <Grid>
                <div className='col-span-2 col-start-1'>
                  <div className='w-full sticky top-0 h-screen'>
                    <Suspense fallback={<Spinner/>}>
                      <Sidebar/>
                    </Suspense>
                  </div> 
                </div>
                <div className='col-span-9 col-start-3 pt-28'>
                  <Page>
                    {children}
                  </Page>
                </div>
              </Grid>         
            </div>
            <div className='h-32'>

            </div>
        </div>
    )
}