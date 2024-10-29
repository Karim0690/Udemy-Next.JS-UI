import InstructorHeader from "../InstructorHeader/InstructorHeader";
import SideNav from "../InstructorSidenav/SideNav";
import InstructorFooter from "../instractorFooter/page";
import InstructorLandingPage from "@/app/_components/instructorLandingPage/page";
import InstructorSection2LandingPage from "@/app/_components/instructorSection2LandingPage/page";

export default function Home({ params: { locale } }) {
  return (
    <>
      <InstructorHeader />
      <InstructorLandingPage />
      <InstructorSection2LandingPage locale={locale} />
      <InstructorFooter />
      <SideNav />
    </>
  );
}
