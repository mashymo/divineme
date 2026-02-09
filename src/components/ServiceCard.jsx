export function ServiceCard({title, description, price}) {
    return (
        <div
            className="border border-neutral-700 p-6 hover:border-[#d2b48c] hover:shadow-[0_0_15px_rgba(210,180,140,0.2)] transition-all duration-300 bg-black/30">
            <h3 className="font-serif text-xl text-neutral-300 tracking-wider mb-3">
                {title}
            </h3>
            <p className="text-neutral-500 text-sm mb-4 leading-relaxed min-h-[80px]">
                {description}
            </p>
            <p className="text-neutral-400 text-sm tracking-wider">
                {price}
            </p>
        </div>
    );
}