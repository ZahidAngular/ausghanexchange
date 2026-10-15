import type { Metadata } from "next"
import Link from "next/link"
import { LegalLayout } from "@/components/LegalLayout"

export const metadata: Metadata = { title: "Terms of Use" }

const sections = [
  "Our Services",
  "Eligibility",
  "Identity Verification (KYC)",
  "AML/CTF Compliance",
  "Transactions",
  "Payment Methods",
  "Cancellation and Refunds",
  "Limitation of Liability",
  "Fraud and Suspicious Activity",
  "Privacy",
  "Third Parties",
  "Intellectual Property",
  "Changes to Terms",
  "Governing Law",
]
const toc = sections.map((s, i) => ({ id: `s${i + 1}`, label: `${i + 1}. ${s}` }))
const H = ({ n }: { n: number }) => <h2 id={`s${n}`}>{toc[n - 1].label}</h2>

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" effective="04 April 2026" toc={toc}>
      <p>
        <strong>Effective Date:</strong> 04 April 2026
      </p>
      <p>
        These Terms and Conditions apply to all services provided by <strong>Ausghan Exchange</strong>, operated by{" "}
        <strong>AUSGHAN EXPRESS PTY LTD (ABN: 99 663 648 244)</strong> (“we”, “us”, “our”).
      </p>
      <p>By using our services, you agree to these Terms.</p>

      <H n={1} />
      <p>We provide:</p>
      <ul>
        <li>Money transfer (remittance) services</li>
        <li>Currency exchange services</li>
      </ul>
      <p>We reserve the right to refuse or delay any transaction at our discretion.</p>

      <H n={2} />
      <p>To use our services, you must:</p>
      <ul>
        <li>Be at least 18 years old</li>
        <li>Provide valid identification</li>
        <li>Comply with all applicable laws</li>
      </ul>

      <H n={3} />
      <p>We are required by law to verify your identity.</p>
      <p>You agree to provide:</p>
      <ul>
        <li>Valid ID documents</li>
        <li>Accurate personal information</li>
      </ul>
      <p>We may:</p>
      <ul>
        <li>Request additional documents</li>
        <li>Refuse service if verification is not satisfactory</li>
      </ul>

      <H n={4} />
      <p>We comply with Australian laws including the AML/CTF Act.</p>
      <p>This means:</p>
      <ul>
        <li>We monitor transactions</li>
        <li>We may report transactions to AUSTRAC (including SMR, TTR, IFTI)</li>
        <li>We may delay, block, or refuse transactions</li>
      </ul>
      <p>
        We are <strong>not required to notify you</strong> if a report is made.
      </p>

      <H n={5} />
      <h3>5.1 Accuracy</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Providing correct recipient details</li>
        <li>Ensuring information is accurate</li>
      </ul>
      <p>We are not responsible for errors caused by incorrect details.</p>
      <h3>5.2 Processing Time</h3>
      <ul>
        <li>Transfer times may vary</li>
        <li>Delays may occur due to compliance checks, banks, or external factors</li>
      </ul>
      <h3>5.3 Exchange Rates &amp; Fees</h3>
      <ul>
        <li>Rates may change at any time</li>
        <li>Fees will be disclosed before confirming a transaction</li>
      </ul>

      <H n={6} />
      <p>We accept payments via:</p>
      <ul>
        <li>Bank transfer</li>
        <li>Other approved methods</li>
      </ul>
      <p>We may refuse certain payment methods at any time.</p>

      <H n={7} />
      <ul>
        <li>Once a transaction is processed, it may not be reversible</li>
        <li>
          Refunds are subject to:
          <ul>
            <li>Transaction status</li>
            <li>Compliance checks</li>
            <li>Fees and exchange rate differences</li>
          </ul>
        </li>
      </ul>

      <H n={8} />
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>
          We are not liable for:
          <ul>
            <li>Delays caused by banks or third parties</li>
            <li>Incorrect details provided by you</li>
            <li>Government or regulatory actions</li>
            <li>Events beyond our control</li>
          </ul>
        </li>
      </ul>

      <H n={9} />
      <p>We may:</p>
      <ul>
        <li>Refuse or cancel transactions</li>
        <li>Suspend accounts</li>
        <li>Report activity to authorities</li>
      </ul>
      <p>if we suspect fraud or illegal activity.</p>

      <H n={10} />
      <p>
        Your personal information is handled in accordance with our{" "}
        <Link href="/privacy-policy" className="font-semibold text-brand-700 underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      <H n={11} />
      <p>We use third-party providers such as:</p>
      <ul>
        <li>Banks</li>
        <li>Payment processors</li>
        <li>Compliance and verification services</li>
      </ul>
      <p>We are not responsible for their actions or delays.</p>

      <H n={12} />
      <p>All website content belongs to Ausghan Exchange and cannot be used without permission.</p>

      <H n={13} />
      <p>
        We may update these Terms at any time.
        <br />
        Continued use of our services means you accept the updated Terms.
      </p>

      <H n={14} />
      <p>
        These Terms are governed by the laws of <strong>Victoria, Australia</strong>.
      </p>
    </LegalLayout>
  )
}
