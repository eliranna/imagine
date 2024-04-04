'use client'

import RootLayout from '_components/RootLayout'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}

export default Layout;
