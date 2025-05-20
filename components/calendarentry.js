import dateFormat from "dateformat";

export default function CalendarEntry({
    titleIn,
    subtitleIn,
    dateIn,
    imageSourceIn,
    imageAltIn,
    shouldUseWhiteText
}) {
    function getDate(dateIn) {
        return dateFormat(dateIn, "d")
    }

    function getMonth(dateIn) {
        return dateFormat(dateIn, "mmm")
    }

    function getTime(dateIn) {
        return dateFormat(dateIn, "h:MM TT");
    }
    
    const eventDate = new Date(dateIn);
    const eventStartDate = getDate(eventDate);
    const eventStartMonth = getMonth(eventDate);
    const eventStartTime = getTime(eventDate);

    const textClassNames = shouldUseWhiteText ? "text-shadow-lg/33 text-shadow-black text-white" : "text-shadow-lg/25 text-shadow-white text-black";
    return (
        <div className="w-[90vw] h-[240px] flex flex-row justify-center items-center">
            <div className="w-[96px] h-[240px] flex flex-col justify-center color-black text-center overflow-hidden">
                <h3 className="text-red-600">{eventStartMonth}</h3>
                <h2>{eventStartDate}</h2>
                <p>{eventStartTime}</p>
            </div>
            <div className="w-full h-full ml-[32px] flex flex-col place-content-center relative">
                <img className="z-0 absolute w-full h-full object-cover" src={imageSourceIn} alt={imageAltIn}/>
                <div className="z-1 absolute pl-[32px] mt-[-4px]">
                    <h2 className={textClassNames}>{titleIn}</h2>
                    <p className={textClassNames}>{subtitleIn}</p>
                </div>
            </div>
        </div>
    );
}
