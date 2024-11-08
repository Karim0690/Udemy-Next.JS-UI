import Become_Instractor from "@/app/_components/BecomeInstructor/BecomeInstructor";
import Com_Logos from "@/app/_components/ComLogos/ComLogos";
import LearnersAchieves from "@/app/_components/LearnersAchieves/LearnersAchieves";
import Top_Categories from "@/app/_components/TopCategories/TopCategories";
import Topics_Categories from "@/app/_components/TopicsCategories/TopicsCategories";
import BroadSelection from "@/app/_components/broadSelection/page";
import LandingPage from "@/app/_components/landingPage/page";
import LandingPageSection5 from "@/app/_components/landingPageSection5/page";
import LandingPageSection8 from "@/app/_components/landingPageSection8/page";
import LandingPageSection9 from "@/app/_components/landingPageSection9/page";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export default async function Home({params:{locale}}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session && (
        <div className="flex gap-3 items-center my-10 mx-28 ">
          <div className="bg-black w-20 h-20 rounded-full text-white flex justify-center items-center font-bold text-2xl">
            {session?.user.name.charAt(0).toUpperCase() +
              session?.user.name.charAt(1).toUpperCase()}
          </div>
          <div className="flex flex-wrap flex-col items-center">
            <p className="text-gray-900 font-bold text-2xl">
              {locale==="en"?"Welcome back,":"مرحباً بعودتك,"} {session.user.name}
            </p>
          </div>
        </div>
      )}
      <LandingPage />
      <Com_Logos />
      <BroadSelection />
      <LearnersAchieves />
      <LandingPageSection5 />
      <Top_Categories />
      <LandingPageSection8 />
      <LandingPageSection9 />
      <Topics_Categories />
      <Become_Instractor />
    </>
  );
}
