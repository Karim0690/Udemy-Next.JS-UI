import TopNav from "../../_components/TopNav/TopNav";
import InstructorHeader from "../InstructorHeader/InstructorHeader";
import SideNav from "../InstructorSidenav/SideNav";
import InstructorFooter from "../instractorFooter/page";
import InstructorLandingPage from "@/app/_components/instructorLandingPage/page";
import InstructorSection2LandingPage from "@/app/_components/instructorSection2LandingPage/page";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth/next";

export default async function Home({ params: { locale } }) {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="block md:hidden">
        <TopNav session={session} locale={locale} />
      </div>
      <InstructorHeader session={session} locale={locale} />
      <InstructorLandingPage session={session} />
      <InstructorSection2LandingPage locale={locale} />
      <InstructorFooter />
      <SideNav />
    </>
  );
}
