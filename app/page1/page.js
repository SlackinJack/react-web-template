import Content from "../../components/content";
import { VARIABLES } from "../../components/variables"

export const metadata = {
    title: VARIABLES.PROJECT_TITLE + " - Page 1",
    description: VARIABLES.PROJECT_DESCRIPTION
};

export default function Page1() {
    return (
        <Content
            titleIn="Page 1 Title"
            subtitleIn="Page 1 Subtitle"
            contentIn="Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
                In id cursus mi pretium tellus duis convallis.
                Tempus leo eu aenean sed diam urna tempor.
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere.
                Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos."
        />
    );
}
