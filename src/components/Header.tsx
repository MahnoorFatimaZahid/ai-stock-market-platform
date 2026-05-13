import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user?: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Image src="/assets/icons/logo.png" alt="logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                        <span className="font-bold py2 text-gray-100">StockMarket</span>
                    </span>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header
