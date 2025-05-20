import "./globals.css";

import Footer from "../components/footer";
import Header from "../components/header";
import { VARIABLES } from "../components/variables"

export const metadata = {
    title: VARIABLES.PROJECT_TITLE,
    description: VARIABLES.PROJECT_DESCRIPTION
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased h-[100vh] w-[100vw]">
                <Header/>
                <div className="h-[100vh] w-[100vw] flex flex-col">
                    {children}
                    <Footer/>
                </div>
            </body>
        </html>
    );
}
