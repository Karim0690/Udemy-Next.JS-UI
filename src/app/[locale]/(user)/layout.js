import InstructorFooter from "../(instructor)/instructor/instractorFooter/page";
import Header from "@/app/_components/Header/Header";

export default async function UserLayout({ children }) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <div>
        <InstructorFooter />
      </div>
    </>
  );
}
