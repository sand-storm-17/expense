"use client";

import Appbar from "@/components/Appbar";
import Insights from "@/components/Insights/insights";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex-1">
      <Insights />
    </div>
  );
}
