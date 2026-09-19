import { Header } from "./Header";
import { Footer } from "./Footer";
export function RootLayout({ children }) { return <div className="min-h-screen overflow-hidden bg-[var(--os-bg)] text-[var(--os-text)] transition-colors duration-300 motion-reduce:transition-none"><Header /><main>{children}</main><Footer /></div>; }
