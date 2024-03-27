'use client';

import Avatar from "./base/Avatar"
import { Page } from "./base/Page"
import LinkButton from "./base/LinkButton"

import { useUserService } from '_services';

const Navbar = ({}) => {

    const userService = useUserService();

    const handleLogout = () => {
        userService.logout()
    }

    return (
        <div className="w-full h-[64px] bg-neutral-50" dir="ltr">
            <Page className="h-full">
                <div className="relative w-full h-full flex justify-between">
                    <div className="h-full flex flex-row justify-end gap-6">
                        <div className="h-full flex flex-col justify-center">
                            <Avatar size={35} src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1686484160/118732079_10223558435893099_3741007992127305573_n_i30ygn.jpg"/>
                        </div>
                        <div className="text-white flex flex-col justify-center">
                            <LinkButton onClick={handleLogout}>
                                התנתק
                            </LinkButton>
                        </div>
                    </div>
                    <div className="w-fit h-full absolute mx-auto right-0 left-0 flex flex-col justify-center">
                        {false && <img src="https://www.shavitim.com/shavitim-assets/logo.svg" className="w-[155px]"/>}
                    </div>
                    <div className="flex flex-col justify-center">
                        <img src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711029426/0_2_1_1_ziundv.png" className="w-[35px]"/>
                    </div>
                </div>
            </Page>
        </div>
    )
}

export default Navbar

