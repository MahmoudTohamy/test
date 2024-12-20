/** @format */

import AboutNusuk from "@/components/AboutNusuk/index";
import React from "react";
type TProps = {
  searchParams: Promise<{
    tab: string;
  }>;
};
export default async function Page({ searchParams }: TProps) {
  const { tab } = await searchParams;
  return <AboutNusuk tab={tab} />;
}
