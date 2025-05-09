import { useRouter } from "next/router";
import Navbar from "../Navbar"
type AppShellProps = {
    children: React.ReactNode;
}
const hiddenNavbar = ["/src/pages/404"];

export default function Index(props: AppShellProps) {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <div>
            {hiddenNavbar.includes(pathname) && <Navbar />}
            {children}
        </div>
    )
}
