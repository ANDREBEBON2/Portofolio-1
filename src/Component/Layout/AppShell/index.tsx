
import Navbar from "../Navbar"
type AppShellProps = {
    children: React.ReactNode;
}
export default function index(props: AppShellProps) {
    const { children } = props;
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
