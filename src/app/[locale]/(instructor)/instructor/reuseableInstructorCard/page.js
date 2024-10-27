import Image from "next/image";
import Link from "next/link";

function ReuseableInstructorCard({ image, name, des  }) {
    return ( 
        <>
            <div className=" p-3 m-3 md:p-3 md:m-3 md:ml-10 lg:ml-6 lg:grid lg:grid-cols-2 border border-[#d1d7dc] shadow-lg " >
                <div className="flex" >
                    <Image
                        src={image}
                        width={200}
                        height={200}
                        alt="Instructor image"
                        className="mx-auto w-[350px] lg:w-[200px]"
                    />
                </div>
                <div className="w-full flex-1 p-3 flex flex-col justify-center" >
                    <h1 className="text-xl mb-6 font-bold " >{name}</h1>
                    <p className="mb-6" >{des}</p>
                    <Link className="text-[#8072e6] underline" href="/instructor" >Get Started</Link>
                </div>
            </div>
        </>
     );
}

export default ReuseableInstructorCard;