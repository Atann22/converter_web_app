import { Link } from "react-router-dom"

export default function ToolsCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ToolsProps
                icon="🔄"
                title="Image Converter"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966."
                to="/convert"
            />

            <ToolsProps
                icon="📉"
                title="Image Compressor"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966."
                to="/compress"
            />

            <ToolsProps
                icon="📱"
                title="Social Media Presets"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966."
                to="/resize"
            />
        </div>
    )
}

function ToolsProps(props) {
    return (
        <Link to={props.to} className="border-2 border-slate-400 bg-slate-50/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-500 cursor-pointer transition-all flex flex-col min-h-60">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{props.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                    {props.title}
                </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{props.desc}</p>
        </Link>
    )
}