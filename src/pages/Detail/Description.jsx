import millify from "millify";
import { useState } from "react";

const Description = ({ video }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Açıklama metni
    const text = isOpen
        ? video.description // Açık durumu
        : video.description.slice(0, 150) + "...daha fazla"; // Kapalı durumu

    return (
        <div
            onClick={() => setIsOpen(!isOpen)} // Tıklama olayını bağla
            className="bg-secondary rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80"
        >
            <div className="flex gap-4 mb-2">
                <p className="font-bold">{millify(video.viewCount)} Görüntülenme</p>
                <p>
                    {new Date(video.publishDate).toLocaleDateString("tr", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
            </div>
            {/* Açıklama metni */}
            <p className="whitespace-pre-wrap">{text}</p>
        </div>
    );
};

export default Description;
