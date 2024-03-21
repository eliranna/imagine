import Image from "./base/Image"

const ImagesPanel = ({image}: {image: string}) => {
    return (
        <div>
            <img src={image || 'https://cdn.discordapp.com/attachments/1214451464336838737/1220171485088317450/xialiang689_little_horse_running_in_forest_aa77d913-02ce-43ba-81c8-30a09f21c0aa.png?ex=660df83f&is=65fb833f&hm=c96cfe4a59a86655445856228245023e22d2aecb1e85388ca7ebd68f44f1107a&'}/>
        </div>
    )
}

export default ImagesPanel