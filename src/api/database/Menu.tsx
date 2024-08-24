"use server";

import { FaFileWaveform } from "react-icons/fa6";
import { useTranslations } from 'next-intl';

export async function MenuDatabase() {
  const t = useTranslations('Navigation');
  return [
    {
      title: "Home",
      path: '/',
      active: true,
      icon: null,
    },
    {
      title: t("features"),
      path: "/features",
      active: true,
      icon: <FaFileWaveform />,
    },
    {
      title: t("services"),
      path: "/services",
      active: true,
      icon: <FaFileWaveform />,
    },
    {
      title: t("products"),
      path: "/products",
      active: true,
      icon: <FaFileWaveform />,
    },
    {
      title: t("about"),
      path: "/about",
      active: true,
      icon: <FaFileWaveform />,
    },
  ];
}
