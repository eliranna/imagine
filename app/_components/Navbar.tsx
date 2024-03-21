import Link from "next/link"
import Avatar from "./base/Avatar"
import { Page } from "./base/Page"

const Navbar = ({}) => {
    return (
        <div className="w-full h-[64px] bg-black" dir="ltr">
            <Page className="h-full">
                <div className="h-full flex justify-between">
                    <div className="h-full flex flex-row justify-end gap-6">
                        <div className="h-full flex flex-col justify-center">
                            <Avatar size={35} src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1686484160/118732079_10223558435893099_3741007992127305573_n_i30ygn.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        
                    </div>
                </div>
            </Page>
        </div>
    )
}

export default Navbar

