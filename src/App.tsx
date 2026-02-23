import Navigation from "@/src/components/nav";
import Main from "@/src/components/main";
import { useEffect, useState } from "react";

function App() {
    useEffect(() => {
        console.log("Product card rendered for the first time!");
        return () => {
            console.log("Unmounted");
        };
    }, []);
    const [store, setStore] = useState<number>(0);
    return (
        <div className="h-full flex flex-col w-full bg-gray-200">
            <Navigation
                itemCount={store}
            />
            <main className="flex flex-col items-center justify-center w-full mt-10 gap-y-32 mb-40">
                <h1 className="text-6xl text-gray-800 font-bold">
                    Product Catalogue
                </h1>
                <Main
                    setStore={setStore}
                />
            </main>
        </div>
    );
};

export default App;