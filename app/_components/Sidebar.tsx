import Link from "next/link";
import LinkButton from "./base/LinkButton"
import { useUserService } from '_services';

const Sidebar = ({}) => {

    const userService = useUserService();

    return (
        <div className="w-full h-full px-8 py-6">
            <div className="flex flex-col gap-10 justify-between h-full">
                <div className="flex flex-col gap-12">
                    <div>
                        <img className="w-[40px]" src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711029426/0_2_1_1_ziundv.png"/>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <Link href={"/create"}>
                                <LinkButton underline>
                                    יצירה חדשה
                                </LinkButton>
                            </Link>
                        </div>
                        <div>
                            <LinkButton underline onClick={() => userService.logout()}>
                            היצירות שלי  
                            </LinkButton>
                        </div>
                        <div>
                            <LinkButton underline onClick={() => userService.logout()}>
                            יצירות הקהילה
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <div>
                    <LinkButton underline onClick={() => userService.logout()}>
                        התנתקות
                    </LinkButton>
                </div>

            </div>
        </div>
    )
}

export default Sidebar

