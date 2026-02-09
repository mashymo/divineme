// Gallery.jsx
import { galleryData } from '../data/galleryData';

function GalleryPage() {
    return (
        <div className="bg-black text-white min-h-screen px-6 py-20">
            <h1 className="text-center text-5xl mb-12">GALLERY</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {galleryData.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        className="aspect-square object-cover hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;