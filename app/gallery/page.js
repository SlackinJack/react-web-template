import GalleryScroller from "../../components/galleryscroller";
import imageJson from "../../public/gallery/images.json";
import { VARIABLES } from "../../components/variables"

export const metadata = {
    title: VARIABLES.PROJECT_TITLE + " - Gallery",
    description: VARIABLES.PROJECT_DESCRIPTION
};

export default function GalleryPage() {
    return (
        <GalleryScroller contentIn={imageJson}/>
    );
}
