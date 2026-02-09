export default function SectionSeparator({ className = "" }) {
    return (
        <div
            className={`border-t border-neutral-800 
                        my-4
                        w-[60%]  /* makes it shorter than full width */
                        mx-auto max-w-[600px] 
                        ${className}`}
        />
    );
}
