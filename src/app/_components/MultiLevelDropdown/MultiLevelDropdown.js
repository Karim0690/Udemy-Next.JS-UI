import React, { useEffect, useRef, useState } from "react";
import styles from "./MultiLevelDropdown.module.css";
import Link from "next/link";

const MultiLevelDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveCategory(null);
      setActiveSubcategory(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className="text-sm text-gray-600  hover:text-violet-600">Categories</a>
      {isOpen && (
        <div className="absolute flex top-14 ">
          <div className="absolute left-0 top-full z-10 bg-white shadow-lg">
            <div className="flex px-3 py-2 border border-gray-300">
              <ul className="ud-unstyled-list ud-block-list w-[215px] h-[30rem]">
                {categories.map((category) => (
                  <Link key={category.id} href={`/courses/${category.slug}`}>
                    <li className="p-2 text-sm">
                      <button
                        className={`ud-btn ud-btn-large ud-btn-ghost ud-text-sm w-full text-left ${
                          activeCategory === category.id
                            ? "text-violet-600"
                            : ""
                        }`}
                        onMouseEnter={() => {
                          setActiveCategory(category.id);
                          setActiveSubcategory(null);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          {category.subcategories && (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          {activeCategory && (
            <div className="absolute left-60 top-full z-10 bg-white shadow-lg">
              <div className="flex px-3 py-2 border border-gray-300">
                <ul className="ud-unstyled-list ud-block-list w-[215px] h-[30rem]">
                  {categories
                    .find((c) => c.id === activeCategory)
                    ?.subcategories?.map((subcategory) => (
                      <Link
                        key={categories.id}
                        href={`/courses/${subcategory.slug}`}
                      >
                        <li
                          key={subcategory.id}
                          className="px-3 py-2 text-sm hover:text-violet-600"
                        >
                          <button
                            className={`ud-btn ud-btn-large ud-btn-ghost ud-text-sm w-full text-left ${
                              activeSubcategory === subcategory.id
                                ? "text-violet-600"
                                : ""
                            }`}
                            onMouseEnter={() =>
                              setActiveSubcategory(subcategory.id)
                            }
                          >
                            <div className="flex justify-between items-center">
                              <span>{subcategory.name}</span>
                              {subcategory.popularTopics &&
                                subcategory.popularTopics.length > 0 && (
                                  <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                )}
                            </div>
                          </button>
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          )}

          {activeSubcategory && (
            <div className="absolute left-[480px] top-full z-10 bg-white shadow-lg">
              <div className="flex flex-col px-3 py-3 text-sm border border-gray-300">
                <h2 className={styles.popular}>Popular Topics</h2>
                <ul className="ud-unstyled-list ud-block-list w-[215px] h-[457px]">
                  {categories
                    .find((c) => c.id === activeCategory)
                    ?.subcategories?.find((sc) => sc.id === activeSubcategory)
                    ?.popularTopics?.map((topic, index) => (
                      <Link
                        key={index}
                        href={`/topic/${topic.toLowerCase()}`}
                      >
                        <li
                          key={index}
                          className="px-3 py-2 hover:text-violet-600"
                        >
                          <a
                            href={`#${topic}`}
                            className="ud-btn ud-btn-large ud-btn-ghost ud-text-sm w-full text-left"
                          >
                            {topic}
                          </a>
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiLevelDropdown;
const categories = [
  {
    id: 288,
    name: "Development",
    slug: "development",
    subcategories: [
      {
        id: 8,
        name: "Web Development",
        slug: "web-development",
        popularTopics: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Angular",
          "Vue.js",
          "Bootstrap",
        ],
      },
      {
        id: 558,
        name: "Data Science",
        slug: "data-science",
        popularTopics: [
          "Python",
          "Machine Learning",
          "Data Analysis",
          "Deep Learning",
          "Statistics",
        ],
      },
      {
        id: 10,
        name: "Mobile Development",
        slug: "mobile-development",
        popularTopics: ["Flutter", "React Native", "Swift", "Kotlin", "Ionic"],
      },
    ],
  },
  {
    id: 268,
    name: "Business",
    slug: "business",
    subcategories: [
      {
        id: 12,
        name: "Entrepreneurship",
        slug: "entrepreneurship",
        popularTopics: [
          "Business Strategy",
          "Freelancing",
          "Startup",
          "Business Plan",
        ],
      },
      {
        id: 13,
        name: "Management",
        slug: "management",
        popularTopics: ["Leadership", "Time Management", "Productivity"],
      },
    ],
  },
  {
    id: 328,
    name: "Finance & Accounting",
    slug: "finance-accounting",
  },
  {
    id: 444,
    name: "Design",
    slug: "design",
    subcategories: [
      {
        id: 15,
        name: "Graphic Design",
        slug: "graphic-design",
        popularTopics: ["Photoshop", "Illustrator", "Logo Design", "Branding"],
      },
      {
        id: 16,
        name: "UI/UX Design",
        slug: "ui-ux-design",
        popularTopics: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Usability Testing",
        ],
      },
    ],
  },
  {
    id: 555,
    name: "Health & Fitness",
    slug: "health-fitness",
    subcategories: [
      {
        id: 18,
        name: "Nutrition",
        slug: "nutrition",
        popularTopics: [
          "Healthy Eating",
          "Meal Planning",
          "Dietary Supplements",
        ],
      },
      {
        id: 19,
        name: "Fitness",
        slug: "fitness",
        popularTopics: ["Yoga", "Weight Loss", "Strength Training", "Cardio"],
      },
    ],
  },
  {
    id: 666,
    name: "Personal Development",
    slug: "personal-development",
    subcategories: [
      {
        id: 20,
        name: "Soft Skills",
        slug: "soft-skills",
        popularTopics: [
          "Communication",
          "Emotional Intelligence",
          "Time Management",
        ],
      },
      {
        id: 21,
        name: "Productivity",
        slug: "productivity",
        popularTopics: ["Goal Setting", "Motivation", "Mindfulness"],
      },
    ],
  },
];