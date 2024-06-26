import { iconTech } from "../../data/iconsTech";

export default function SliderTech() {
    return (
        <div className="mx-auto text-gray-300 items-center">
            <div className="flex animate-scroll">
                {iconTech.map((Icon, index) => (
                    <div key={index} className="flex-none w-24 flex justify-center items-center">
                        <Icon className="text-6xl" />
                    </div>
                ))}
                {iconTech.map((Icon, index) => (
                    <div key={index + iconTech.length} className="flex-none w-24 flex justify-center items-center">
                        <Icon className="text-6xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}
