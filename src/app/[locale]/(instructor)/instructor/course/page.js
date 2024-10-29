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
<<<<<<< HEAD:src/app/(instructor)/instructor/course/page.js
      <InstructorSection2LandingPage />
=======
      <InstructorSection2LandingPage locale={locale} />
>>>>>>> d3ee4e93ac14150d39d6cc5ab57fca8414c294d4:src/app/[locale]/(instructor)/instructor/course/page.js
      <InstructorFooter />
      <SideNav />
    </>
  );
}
