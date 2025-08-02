import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="de">
            <body className={`antialiased `}> {/* select-none*/}
                {children}
            </body>
        </html>
    );
}
