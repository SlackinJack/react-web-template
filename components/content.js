export default function Content({ titleIn, subtitleIn, contentIn }) {
    return (
        <div className="h-[100vh] w-[100vw] px-[32px] pt-[56px] flex flex-col justify-stretch content-stretch">
            <h1>{titleIn}</h1>
            <h2>{subtitleIn}</h2>
            <p>{contentIn}</p>
        </div>
    );
}
