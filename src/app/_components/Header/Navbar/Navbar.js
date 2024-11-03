"use client";

import CartPopper from "../../CartPopper/CartPopper";
import LanguageSwitch from "../../LanguageSwitch/LanguageSwitch";
import MultiLevelDropdown from "../../MultiLevelDropdown/MultiLevelDropdown";
import PopperComponent from "../../Popper/Popper";
import UserControlles from "../../UserControlles/UserControlles";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { jwtDecode } from "jwt-decode";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineOpenInNew,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Navbar = () => {
  return (
  <>
    </>
  );
};

export default Navbar;