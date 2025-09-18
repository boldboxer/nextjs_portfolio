import { Suspense } from "react"
import PrivacyPolicyPage from "@/components/privacy-policy"

export default function Privacy() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading privacy policy...</p>}>
      <PrivacyPolicyPage />
    </Suspense>
  )
}
