"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MatomoTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any)._paq) {
      const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
      (window as any)._paq.push(["setCustomUrl", url]);
      (window as any)._paq.push(["setDocumentTitle", document.title]);
      (window as any)._paq.push(["trackPageView"]);
    }
  }, [pathname, searchParams]);

  return null;
}
