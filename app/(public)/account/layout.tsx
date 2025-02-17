import { redirect } from 'next/navigation';
import { auth } from '_helpers/server';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {

    if (auth.isAuthenticated()) {
        //redirect('/');
    }

    return (
        <div>
            {children}
        </div>
    );
}