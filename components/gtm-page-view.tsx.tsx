"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/gtm";

export default function GtmPageView() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("pageview", { page: pathname });
  }, [pathname]);

  return null;
}
