import CalendarScroller from "../../components/calendarscroller";
import eventsJson from "../../public/calendar/events.json";
import { VARIABLES } from "../../components/variables"

export const metadata = {
    title: VARIABLES.PROJECT_TITLE + " - Calendar",
    description: VARIABLES.PROJECT_DESCRIPTION
};

export default function Calendar() {
    return (
        <CalendarScroller contentIn={eventsJson}/>
    );
}
