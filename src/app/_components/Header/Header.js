import Navbar from "./Navbar/Navbar";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog as D,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { jwtDecode } from "jwt-decode";
import { getServerSession } from "next-auth/next";
import { getSession, signIn, useSession } from "next-auth/react";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log("session " + session);

  return (
    <>
      <Navbar session={session} />
    </>
  );
}
