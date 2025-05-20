import Link from "next/link";

export default function Header() {
    return (
        <div className="dynamic-bg header z-999 h-[48px] w-[100vw] mt-0 p-[12px] fixed flex flex-row justify-between">
            <div className="flex flex-col justify-around content-around">
                <Link href="/">Title</Link>
            </div>
            <div className="flex flex-row justify-between items-center gap-[12px]">
                <Link href="/page1">Page 1</Link>
                <Link href="/calendar">Calendar</Link>
                <Link href="/gallery">Gallery</Link>
            </div>
        </div>
    );
}
