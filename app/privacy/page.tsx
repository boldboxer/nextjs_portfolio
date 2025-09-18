import { Suspense } from "react"
import PrivacyPolicyPage from "@/components/privacy-policy"

// ✅ Force runtime rendering to avoid build-time errors
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default function Privacy() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading privacy policy...</p>}>
      <PrivacyPolicyPage />
    </Suspense>
  )
}
