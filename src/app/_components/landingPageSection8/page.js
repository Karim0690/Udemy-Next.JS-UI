import Image from "next/image";
import Link from "next/link";

function LandingPageSection8() {
    return (
        <>
            <div>
                <div className="bg-gray-100 my-20 p-10 flex " >
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="p-20">
                            <div className="flex" >
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <Image
                                        alt=""
                                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                                        className="h-8 w-auto"
                                        width={91}
                                        height={34}
                                    />
                                </Link>
                                <h1 className="text-2xl font-bold text-[#a435f0]"> Busniss</h1>
                            </div>
                            <h2 className="text-4xl font-bold mt-6" >Upskill your team with Udemy Business</h2>
                            <ul className="mt-6 space-y-6 list-disc pl-6 "  >
                                <li className="text-base text-xl font-large">Unlimited access to 27,000+ top Udemy courses, anytime, anywhere</li>
                                <li className="text-base text-xl font-large">International course collection in 14 languages</li>
                                <li className="text-base text-xl font-large">Top certifications in tech and business</li>
                            </ul>

                            <div>
                                <button className="bg-black text-white font-bold p-2 py-2 mt-10 ">Get Udemy Business</button>
                                <button className=" border border-black font-bold px-4 py-2 mt-10 ml-2 rounded-md">Learn More</button>
                            </div>

                        </div>

                        <div className="flex justify-center items-center" >
                            <Image alt="" src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" width="500" height="500" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPageSection8;