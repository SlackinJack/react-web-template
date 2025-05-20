import Footer from "../../components/footer";
import Header from "../../components/header";
import PagedFullScreenContentScroller from "../../components/pagedfullscreencontentscroller";
import { VARIABLES } from "../../components/variables";
import contentJson from "../../public/home/content.json";

export default function HomePage() {
    return (
        <div>
            <PagedFullScreenContentScroller contentIn={contentJson}/>
        </div>
    );
}
