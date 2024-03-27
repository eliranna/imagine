import LinkButton from "./base/LinkButton"
import { useUserService } from '_services';

const Sidebar = ({}) => {

    const userService = useUserService();

    return (
        <div className="w-full h-full px-8 py-6">
            <div className="flex flex-col gap-10">
                <div>
                    <img className="w-[40px]" src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711029426/0_2_1_1_ziundv.png"/>
                </div>
                <LinkButton underline onClick={() => userService.logout()}>
                    התנתקות
                </LinkButton>
            </div>
        </div>
    )
}

export default Sidebar

