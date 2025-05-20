"use client";

export default function ImagePopup({ sourceIn, altTextIn, descriptionIn, isPortrait }) {
    function onImageClick() {
        // create a floating view of the image
        const galleryBody = document.getElementById("galleryBody");
        const galleryRoot = document.getElementById("galleryRoot");

        // dim background
        var dim = document.createElement("div");
        dim.id = "galleryImageViewer";
        dim.className = "z-5 fixed h-[100vh] w-[100vw] mt-0 ml-0 flex flex-col overflow-scroll";
        dim.style = "background-color: rgba(0, 0, 0, 0.67); backdrop-filter: blur(16px);";
        dim.onclick = function() {dim.remove()};

        var div = document.createElement("div");
        div.className = "z-10 m-auto flex justify-around content-around";
        // div.className += isPortrait ? " flex-row" : " flex-col";
        div.className += " flex-col";

        var image = document.createElement("img");
        image.className = "z-10 m-auto pt-[56px] object-cover";
        // image.className += isPortrait ? " w-auto max-w-[75vw] h-auto" : " h-auto max-h-[75vh] w-auto";
        image.className += " h-auto max-h-[75vh] w-auto";
        image.src = sourceIn;
        image.alt = altTextIn;

        var imageDescription = document.createElement("p");
        imageDescription.className = "z-15 p-[24px] text-[24px] text-center font-bold text-white";
        // imageDescription.className += isPortrait ? " w-auto h-[100vh] content-center" : " h-auto w-[100vw] justify-center";
        imageDescription.className += " h-auto w-[100vw] justify-center";
        imageDescription.textContent = descriptionIn;

        var hintText = document.createElement("p");
        hintText.className = "z-15 p-[14px] text-[14px] mt-[-16px] text-center italic text-gray-400";
        hintText.textContent = "Click anywhere to exit preview";

        div.appendChild(image);
        div.appendChild(imageDescription);
        div.appendChild(hintText);
        dim.appendChild(div);
        galleryRoot.insertBefore(dim, galleryBody);
    }

    const previewClassName = "masonry-element " + (isPortrait ? "masonry-element-vertical" : "masonry-element-horizontal");
    return (
        <img className={previewClassName} src={sourceIn} alt={altTextIn} onClick={onImageClick}/>
    );
}
