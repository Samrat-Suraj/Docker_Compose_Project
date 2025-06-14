import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import LoginDialog from "./LoginDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
    const navigate = useNavigate();
    // const [user, setUser] = useState(false);
    const user = {
        name: "Suraj",
        role: "admin",
    };

    const [menu, setMenu] = useState("Home");
    const menuItems =
        user && user.role !== "admin"
            ? ["Home", "Browse Menu", "Special Offers", "Restaurants", "Track Order"]
            : [];

    const handleMenuClick = (item) => {
        setMenu(item);
        if (item === "Home") {
            navigate("/");
        } else if (item === "Browse Menu") {
            navigate("/menu");
        } else if (item === "Restaurants") {
            navigate("/restaurant");
        } else if (item === "Track Order") {
            navigate("/track");
        } else if (item === "Special Offers") {
            navigate("/offers");
        }
    };

    return (
        <div className="flex items-center justify-between bg-white sticky top-0 z-50">
            <h1
                onClick={() => navigate("/")}
                className="text-3xl font-bold text-gray-900 cursor-pointer"
            >
                ForkFly<span className="text-orange-400">.In</span>
            </h1>

            <div className="hidden md:flex items-center space-x-8">
                <ul className="flex items-center gap-5">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => handleMenuClick(item)}
                            className={`${menu === item
                                ? "text-black border-b-2 border-orange-400 font-semibold cursor-pointer"
                                : "text-gray-600 hover:text-black cursor-pointer"
                                } transition-all`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center space-x-4">
                {!user ? (
                    <ul className="flex items-center gap-5 cursor-pointer">
                        <li>Home</li>
                    </ul>
                ) : null}

                {user && user.role !== "admin" ? (
                    <div onClick={() => navigate("/cart")} className="relative">
                        <ShoppingCart size={28} className="text-black cursor-pointer" />
                        <div className="absolute cursor-pointer h-4 w-4 rounded-full top-0 right-0 bg-red-500 text-white text-[8px] font-semibold flex items-center justify-center">
                            1
                        </div>
                    </div>
                ) : null}

                {user?.role === "admin" ? (
                    <div className="lg:flex hidden items-center gap-2">
                        <ul onClick={() => navigate("/admin/orders")} className="flex items-center gap-5 cursor-pointer">
                            <li className="font-semibold text-sm">Orders</li>
                        </ul>
                        <ul onClick={() => navigate("/admin/items")} className="flex items-center gap-5 cursor-pointer">
                            <li className="font-semibold text-sm">Food Items</li>
                        </ul>
                        <ul onClick={() => navigate("/admin/restaurant")} className="flex items-center gap-5 cursor-pointer">
                            <li className="font-semibold text-sm">Restaurants</li>
                        </ul>
                    </div>
                ) : null}

                {user ? (
                    <div className="cursor-pointer">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Suraj Maurya</DropdownMenuLabel>
                                <DropdownMenuSeparator />

                                {user?.role === "admin" ? (
                                    <div className="flex lg:hidden flex-col">
                                        <DropdownMenuItem className="cursor-pointer">
                                            <ul onClick={() => navigate("/admin/items")} className="flex items-center cursor-pointer">
                                                <li className="text-sm">Food Items</li>
                                            </ul>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <ul onClick={() => navigate("/admin/restaurant")} className="flex items-center cursor-pointer">
                                                <li className="text-sm">Restaurants</li>
                                            </ul>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <ul onClick={() => navigate("/admin/orders")} className="flex items-center cursor-pointer">
                                                <li className="text-sm">Orders</li>
                                            </ul>
                                        </DropdownMenuItem>
                                    </div>
                                ) : null}

                                <DropdownMenuItem className="cursor-pointer">
                                    LogOut
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <LoginDialog />
                )}
            </div>
        </div>
    );
};

export default NavBar;
