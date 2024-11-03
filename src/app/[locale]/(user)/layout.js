import Header from "@/app/_components/Header/Header";

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <>
      <Header locale={locale} />
      {children}
      {/* 
      <div>
        <InstructorFooter />
      </div> */}
    </>
  );
}
