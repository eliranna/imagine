import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '_helpers/server';
import RootLayout from '_components/RootLayout'

const Layout = ({ children }: { children: React.ReactNode }) => {

    //if (!auth.isAuthenticated()) {
    //    const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/');
    //    redirect(`/account/login?returnUrl=${returnUrl}`);
    //}

    return (
        <div>
            {children}
        </div>
    );
}

export default Layout;
