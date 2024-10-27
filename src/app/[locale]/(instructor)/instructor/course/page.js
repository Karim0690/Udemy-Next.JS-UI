import InstructorLandingPage from "@/app/_components/instructorLandingPage/page";
import InstructorSection2LandingPage from "@/app/_components/instructorSection2LandingPage/page";
import SideNav from "../InstructorSidenav/SideNav";
import InstructorHeader from "../InstructorHeader/InstructorHeader";
import InstructorFooter from "../instractorFooter/page";

export default function Home() {
  return (
    <>
      <InstructorHeader />
      <InstructorLandingPage/>
      <InstructorSection2LandingPage/>
      <InstructorFooter/>
      <SideNav/>
    </>
  );
}
