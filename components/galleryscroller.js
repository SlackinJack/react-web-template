import ImagePopup from "./imagepopup";

export default function GalleryScroller({ contentIn }) {
    var contents = {};

    function addContent(keyIn, valueIn) {
        var newContent = contents;
        newContent[keyIn] = valueIn;
        contents = newContent;
    }

    var i = 0;
    for (const content of contentIn) {
        const imageId = "image" + i.toString();
        addContent(imageId, <ImagePopup
            key={imageId}
            sourceIn={content.source}
            altTextIn={content.alt}
            descriptionIn={content.description}
            isPortrait={content.isPortrait}
        />);
        i++;
    }

    return (
        <div id="galleryRoot" className="mb-[48px]">
            <div id="galleryBody" className="px-[32px] pt-[56px]">
                <h1>Gallery Title</h1>
                <h2>Gallery Subtitle</h2>
            </div>
            <div className="masonry">
                {Object.values(contents)}
            </div>
        </div>
    );
}
