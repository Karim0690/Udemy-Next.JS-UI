"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export function BreadcrumbDemo({ category, locale }) {
  const [categoryData, setCategoryData] = useState(null);
  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/category/slug/${category}`
        );
        if (data.message === "success") {
          setCategoryData(data.result); // Update the state with the category data
        } else {
          console.error("Failed to fetch subcategories");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    if (category) {
      fetchSubcategory();
    }
  }, [category]);

  if (!categoryData) {
    return <Spinner className="h-8 w-8" />;
  }

  return (
    <Breadcrumb className="font-sans">
      <BreadcrumbList className=" border border-gray-50 shadow-md px-10 flex justify-between">
        <div className="flex items-center justify-between">
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${locale}/courses/${category}`} className="font-semibold capitalize">
              {locale === "en" ? categoryData.name : categoryData.nameAr}
            </BreadcrumbLink>
            <Image
              src={
                "https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
              }
              width={15}
              height={48}
              alt=""
              className="mr-2 ml-4"
            />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <div className="flex">
              {categoryData.subcategories.map((subcate) => (
                <BreadcrumbLink
                  key={subcate._id}
                  href={`/${locale}/courses/${category}/${subcate.slug}`}
                  className="mx-2 text-gray-700 hover:text-[#5022c3]"
                >
                  {locale === "ar" ? subcate.nameAr : subcate.name}
                </BreadcrumbLink>
              ))}
            </div>
          </BreadcrumbItem>
        </div>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border-0">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-white mt-5 mr-10 py-4 pr-48"
            >
              <BreadcrumbLink
                href="/docs/components"
                className="text-sm mx-2 text-gray-700 hover:text-[#5022c3]"
              >
                Web Development
              </BreadcrumbLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
