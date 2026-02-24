import nike1 from "../assets/n1-min.png";

export function ShoeDetail(){
    return (
        <div className="flex flex-col lg:flex-row-reverse space-y-4 pl-5 pr-5">
            {/*Shoe image*/}
            <div className="flex-1 from- bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
                 <img src={nike1}/>
            </div>
            <div className="flex-1 space-y-6">
                {/*title*/}
                <div className="text-5xl font-black md:text-9xl">
                    Nike Air Max 270
                </div>
                {/*description*/}
                <div className="font-medium md:text-xl">
                    {
                    "The Nike Air Max 270 features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks. The sleek design lines and premium materials are inspired by the iconic Air Max silhouette."
                    }
                </div>
                <div className="text-3xl font-extrabold md:text-6xl">
                    100$
                </div>
                <div className="space-x-10">
                    <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
                    Add to bag
                </button>
                <a href="#" className="text-lg font-bold hover:underline-offset-4">
                    See more details
                </a>
                </div>
            </div>
        </div>
    )
}