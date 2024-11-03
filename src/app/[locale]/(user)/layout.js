import Header from "@/app/_components/Header/Header";
import InstructorFooter from "../(instructor)/_components/instractorFooter/InstructorFooter";

export default async function RootLayout({ children, params: { locale } }) {
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
