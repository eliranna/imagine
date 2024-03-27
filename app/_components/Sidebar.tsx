import Button from "./base/Button"

const Sidebar = ({}) => {

    return (
        <div className="w-full h-full px-8 py-6">
            <div className="flex flex-col gap-10">
                <div>
                    <img className="w-[40px]" src="https://res.cloudinary.com/dfdk4g2pj/image/upload/v1711029426/0_2_1_1_ziundv.png"/>
                </div>
                <div className="flex gap-4 rounded-full bg-neutral-100 px-2 py-2">
                    <div className="flex flex-col justify-center">
                        <img src="/icons/plus-color.svg" className="w-[65px]"/>
                    </div>
                    <div className="text-lg flex flex-col justify-center">
                        <span>
                            יצירה חדשה
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

