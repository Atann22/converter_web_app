export default function Advantage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-300">
            <AdvantageProps
                lebih="lebih satu"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library."
            />
            
            <AdvantageProps
                lebih="lebih dua"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library."
            />
            <AdvantageProps
                lebih="lebih tiga"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library."
            />
        </div>
    )
}

function AdvantageProps(props) {
    return (
        <div className="space-y-2 md:pr-8 pt-4 md:pt-0">
            <p className="text-xs sm:text-sm font-semibold text-slate-400">{props.lebih}</p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {props.desc}
            </p>
        </div>
    )
}