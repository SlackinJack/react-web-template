import CalendarEntry from "./calendarentry";

export default function CalendarScroller({ contentIn }) {
    var contents = {};

    function addContent(keyIn, valueIn) {
        var newContent = contents;
        newContent[keyIn] = valueIn;
        contents = newContent;
    }

    var sortedContents = [];
    for (const content of contentIn) {
        const thisDate = new Date(content.date);
        var added = false;
        for (let i = 0; i < sortedContents.length; i++) {
            const thatDate = new Date(sortedContents[i].date);
            if (thisDate > thatDate) continue;
            added = true;
            sortedContents.splice(i, 0, content);
            break;
        }
        if (!added) {
            sortedContents.push(content);
        }
    }

    var i = 0;
    for (const content of sortedContents) {
        const eventId = "event" + i.toString();
        addContent(eventId, <CalendarEntry
            key={eventId}
            titleIn={content.title}
            subtitleIn={content.subtitle}
            dateIn={content.date}
            imageSourceIn={content.imageSource}
            imageAltIn={content.imageAlt}
            shouldUseWhiteText={content.shouldUseWhiteText}
        />);
        i++;
    }

    return (
        <div className="h-fit w-[100vw] mb-[48px]">
            <div className="px-[32px] pt-[56px]">
                <h1>Events Calendar</h1>
                <h2>Subtitle</h2>
            </div>
            <div className="h-fit w-[100vw] grid grid-row-auto grid-col-1 gap-[12px] justify-center">
                {Object.values(contents)}
            </div>
        </div>
    );
}
