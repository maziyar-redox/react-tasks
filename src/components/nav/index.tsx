import ShoppingBag from "@/src/components/icons/ShoppingBag";
import type { navTypes } from "@/src/types/navTypes";

function Navigation({
    itemCount = 0
}: navTypes) {
    return (
        <nav className="flex justify-between items-center px-12 pt-5 pb-4">
            <button className="p-2 rounded-md bg-gray-800 text-white cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 relative">
                <ShoppingBag
                    width={25}
                    height={25}
                />
                <div className="absolute rounded-full px-2 bg-red-500 -bottom-3 -right-3 animate-bounce">
                    <span className="text-white text-xs">
                        {itemCount}
                    </span>
                </div>
            </button>
        </nav>
    );
};

export default Navigation;