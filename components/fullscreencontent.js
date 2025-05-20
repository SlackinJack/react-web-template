export default function FullScreenContent(
    {
        idIn,
        titleIn,
        subTitleIn,
        contentIn,
        backgroundImageSrcIn,
        shouldRenderAtBottom,
        shouldRenderOnRight,
        shouldUseDarkText
    }
) {
    var backgroundImage = "";
    if (backgroundImageSrcIn != null) {
        backgroundImage = <img
            className="z-0 h-[100vh] w-[100vw] mt-[-48px] absolute object-cover"
            src={backgroundImageSrcIn}
            alt="Background image"
        />
    }
    
    var textClassNames = "z-1 h-[100vh] w-[100vw] mt-[-48px] absolute flex flex-col pt-[120px] pb-[36px] px-[48px]";
    textClassNames += shouldRenderAtBottom  ? " place-content-end"    : "";
    textClassNames += shouldRenderOnRight   ? " text-right"     : "";
    textClassNames += shouldUseDarkText     ? " text-black text-shadow-lg/33 text-shadow-white"     : " text-white text-shadow-lg/33 text-shadow-black";
    return (
        <div id={idIn} className="h-[100vh] w-[100vw] relative">
            {backgroundImage}
            <div className={textClassNames}>
                <h1>{titleIn}</h1>
                <h2>{subTitleIn}</h2>
                <p>{contentIn}</p>
            </div>
        </div>
    );
}
