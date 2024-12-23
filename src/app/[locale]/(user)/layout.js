import "./globals.css";
import InstructorFooter from "../(instructor)/instructor/instractorFooter/page";
import Header from "@/app/_components/Header/Header";

export const metadata = {
  title: "Online Courses - Learn Anything, On Your Schedule | Udemy",
  description: "Generated by create next app",
};

export default async function UserLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <div>
        <InstructorFooter />
      </div>
    </>
  );
}
