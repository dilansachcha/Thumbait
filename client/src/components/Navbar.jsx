import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { navLinks } from "../data/navLinks";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { theme } = useThemeContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
<Link to="/">
                    <img src="/logo.svg" alt="logo" className="h-12 w-auto" />
                </Link>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                <Link to="/" className="hover:text-purple-200 transition">Home</Link>
                <Link to="/generate" className="hover:text-purple-200 transition">Generate</Link>
                <Link to="/my-generations" className="hover:text-purple-200 transition">My Generations</Link>
                <Link to="#" className="hover:text-purple-200 transition">Docs</Link>
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                
                <Link to="/" className="hover:text-purple-200 transition">Home</Link>
                <Link to="/generate" className="hover:text-purple-200 transition">Generate</Link>
                <Link to="/my-generations" className="hover:text-purple-200 transition">My Generations</Link>
                <Link to="#" className="hover:text-purple-200 transition">Docs</Link>
                <button>
                    Sign in
                </button>
                <button className="aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-950 transition px-4 py-2 border border-purple-600 rounded-md">
                    Sign in
                </button>
                <button onClick={()=>navigate('/login')} className="hidden md:block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition text-white rounded-md">
                    Get Started
                </button>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}