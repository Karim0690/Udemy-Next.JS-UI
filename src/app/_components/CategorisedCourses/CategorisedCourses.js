import CourseLargeCard from "../CourseLargeCard/CourseLargeCard";
import FilterAccordion from "../FilterAccordion/FilterAccordion";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

const CategorisedCourses = ({ category }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const t = useTranslations("Categories");
  const { locale } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [rating, setRating] = useState("");
  const [topics, setTopics] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (category && category._id) {
      const fetchCourses = async () => {
        try {
          setLoading(true);
          let query = `?category=${category._id}&sort=${sort}`;

          if (subcategory) {
            query += `&subcategory=${subcategory}`;
          }

          if (level) {
            query += `&level=${level}`;
          }

          if (topics) {
            query += `&topics=${topics}`;
          }
          if (rating) {
            query += `&rating.average[gte]=${rating}`;
          }
          if (price) {
            query += `&price${price}`;
          }
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses${query}`
          );
          if (data.status === "success") {
            setCourses(data.data);
          } else {
            console.error("Failed to fetch courses");
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCourses();
    }
  }, [category, sort, subcategory, level, topics, rating, price]);

  return (
    <>
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          {t("all")}{" "}
          <span className="capitalize">{category && category.name}</span>{" "}
          {t("courses")}
        </h3>
        <div className="flex items-center border border-gray-200 text-gray-800 mb-6 p-4">
          <IoIosInformationCircle style={{ fontSize: "32px" }} />
          <p className="font-bold text-base text-gray-800 ml-6">{t("money")}</p>
        </div>
        {/* Course Cards */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-3 border border-black font-sans hover:cursor-pointer hover:bg-gray-200 p-4"
              onClick={toggleFilter}
            >
              <IoFilterOutline style={{ fontSize: "18px" }} />
              <span className="font-bold">{t("filter")}</span>
            </div>
            <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-40 p-2">
              <div className="relative w-full">
                <select
                  id="sort-options"
                  name="sort"
                  required
                  className="block w-full px-2 pt-5 text-base focus:outline-none bg-transparent text-gray-800"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="">{t("popular")}</option>
                  <option value="-rating">{t("high")}</option>
                  <option value="-createdAt">{t("newest")}</option>
                </select>
                <label
                  htmlFor="sort-options"
                  className="absolute text-xs font-bold text-gray-700 transition-all left-3 top-0 peer-focus:text-xs peer-focus:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 hover:text-gray-600"
                >
                  {t("sort")}
                </label>
              </div>
            </div>
          </div>
          {(rating || topics || subcategory || level || price) && (
            <button
              className="text-violet-700 underline underline-offset-2 hover:text-violet-900 text-sm mb-3"
              onClick={() => {
                setRating("");
                setTopics("");
                setSubcategory("");
                setLevel("");
                setPrice("");
              }}
            >
              Clear All Filters
            </button>
          )}
        </div>
        <div className="flex mt-2 mb-12">
          <div
            className={`w-[25%] ${
              isFilterVisible ? "lg:block" : "lg:hidden"
            } hidden pt-4`}
          >
            <FilterAccordion
              rating={rating}
              setRating={setRating}
              topics={topics}
              setTopics={setTopics}
              subcategory={subcategory}
              setSubcategory={setSubcategory}
              level={level}
              setLevel={setLevel}
              price={price}
              setPrice={setPrice}
              category={category}
            />
          </div>
          <div className="w-full lg:mr-6 lg:ml-6">
            {courses.courses &&
              courses.courses.map((course, i) => (
                <CourseLargeCard key={i} course={course} />
              ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CategorisedCourses;
