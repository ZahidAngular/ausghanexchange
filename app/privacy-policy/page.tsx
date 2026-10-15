import type { Metadata } from "next"
import { LegalLayout } from "@/components/LegalLayout"
import { features, site } from "@/lib/site"

export const metadata: Metadata = { title: "Privacy Policy" }

const toc = [
  "1. Introduction",
  "2. Applicable Laws",
  "3. Information We Collect",
  "4. How We Collect Information",
  "5. Why We Collect Your Information",
  "6. Disclosure of Personal Information",
  "7. Identity Verification and Consent",
  "8. Data Security",
  "9. Record Retention",
  "10. Cookies and Analytics",
  "11. Access and Correction",
  "12. Complaints",
  "13. Data Breaches",
  "14. Changes to this Policy",
].map((label, i) => ({ id: `p${i + 1}`, label }))
const H = ({ n }: { n: number }) => <h2 id={`p${n}`}>{toc[n - 1].label}</h2>
const L = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
)

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" toc={toc}>
      <H n={1} />
      <p>
        Ausghan Exchange Pty Ltd (“Ausghan Exchange”, “we”, “us”, “our”) is committed to protecting your privacy and handling
        your personal information in accordance with Australian law.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, store and protect your personal information when you use
        our remittance and related financial services.
      </p>
      <p>
        By accessing our website or using our services, you consent to the collection, use and disclosure of your personal
        information as described in this Privacy Policy.
      </p>

      <H n={2} />
      <p>Ausghan Exchange complies with:</p>
      <L
        items={[
          "Privacy Act 1988 (Cth)",
          "Australian Privacy Principles (APPs)",
          "Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act)",
          "AML/CTF Rules and AUSTRAC Guidance",
          "Identity Verification Services Act 2023 (where applicable)",
          "Other applicable Australian laws and regulations",
        ]}
      />

      <H n={3} />
      <h3>Personal Information</h3>
      <p>We may collect:</p>
      <L
        items={[
          "Full name",
          "Date of birth",
          "Residential address",
          "Contact details including phone number and email address",
          "Occupation and employment details (where required)",
          "Identification documents including passport, driver’s licence or other government-issued identification",
          "Customer photographs or biometric information where legally permitted",
          "Beneficial ownership information",
          "Source of funds and source of wealth information",
          "Bank account details and payment information",
        ]}
      />
      <h3>Transaction Information</h3>
      <p>We may collect:</p>
      <L
        items={[
          "Transaction amounts",
          "Beneficiary details",
          "Payment methods",
          "Transfer destinations",
          "Purpose of transaction",
          "Transaction history and activity records",
        ]}
      />
      <h3>Compliance Information</h3>
      <p>To comply with AML/CTF obligations, we may collect and maintain information relating to:</p>
      <L
        items={[
          "Identity verification",
          "Politically Exposed Person (PEP) screening",
          "Sanctions screening",
          "Adverse media screening",
          "Customer risk assessments",
          "Enhanced Customer Due Diligence (ECDD)",
          "Ongoing transaction monitoring",
          "AUSTRAC reporting obligations",
        ]}
      />
      <h3>Website Information</h3>
      <p>When you visit our website, we may automatically collect:</p>
      <L items={["IP address", "Device information", "Browser type", "Website usage information", "Cookies and analytics information"]} />

      <H n={4} />
      <p>We collect personal information directly from you when:</p>
      <L
        items={[
          "You apply for our services",
          "You conduct a transaction",
          "You contact us",
          "You submit identification documents",
          "You visit our website",
        ]}
      />
      <p>We may also collect information from:</p>
      <L
        items={[
          "Identity verification providers",
          "The Australian Government Document Verification Service (DVS)",
          "Financial institutions",
          "Sanctions and PEP screening providers",
          "Fraud prevention providers",
          "Government agencies and regulators",
          "Publicly available sources",
        ]}
      />

      <H n={5} />
      <h3>Providing Services</h3>
      <p>We collect and use personal information to:</p>
      <L
        items={[
          "Process remittance transactions",
          "Verify your identity",
          "Deliver customer support",
          "Maintain customer records",
          "Manage our business relationship with you",
        ]}
      />
      <h3>AML/CTF Compliance</h3>
      <p>We collect and use personal information to:</p>
      <L
        items={[
          "Conduct Know Your Customer (KYC) checks",
          "Verify identity before providing designated services",
          "Conduct sanctions screening",
          "Conduct PEP screening",
          "Assess money laundering and terrorism financing risks",
          "Undertake ongoing customer due diligence",
          "Perform enhanced customer due diligence where required",
          "Monitor transactions for suspicious activity",
          "Meet reporting obligations to AUSTRAC",
        ]}
      />
      <h3>Fraud Prevention and Security</h3>
      <p>We may use personal information to:</p>
      <L
        items={[
          "Detect and prevent fraud",
          "Investigate suspicious activity",
          "Protect our customers and business",
          "Respond to legal or regulatory requests",
        ]}
      />

      <H n={6} />
      <p>We may disclose your personal information to:</p>
      <L
        items={[
          "AUSTRAC",
          "Law enforcement agencies",
          "Courts and regulatory authorities",
          "Identity verification providers",
          "Document Verification Service providers",
          "AML/CTF screening providers",
          "Financial institutions and payment providers",
          "Overseas payout partners involved in processing transactions",
          "Professional advisers, auditors and compliance consultants",
          "Technology, cloud storage and software providers",
        ]}
      />
      <p>
        Where information is disclosed overseas, reasonable steps are taken to ensure information is protected in accordance
        with Australian privacy laws. Some of these parties may be located outside Australia. By using our services, you
        acknowledge that your personal information may be transferred overseas where reasonably necessary to process
        transactions, comply with legal obligations, or provide our services.
      </p>
      <p>We may disclose information without notice where required or authorised by law.</p>

      <H n={7} />
      <p>
        To comply with Australian AML/CTF laws, Ausghan Exchange may verify identification information provided by you against
        official government records using approved identity verification services.
      </p>
      <p>
        By applying for or using our services, you expressly consent to Ausghan Exchange collecting, using and disclosing your
        identification information for identity verification, AML/CTF compliance and fraud prevention purposes, including
        verification through the Australian Government Document Verification Service (DVS) and other approved verification
        providers.
      </p>
      <p>You consent to us:</p>
      <L
        items={[
          "Collecting identification information;",
          "Verifying your identity using approved verification services;",
          "Conducting sanctions, PEP and risk screening;",
          "Retaining verification records as required by law.",
        ]}
      />
      <p>If you choose not to provide the required information, we may be unable to provide services to you.</p>

      <H n={8} />
      <p>
        We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access,
        modification or disclosure.
      </p>
      <p>Security measures include:</p>
      <L
        items={[
          "Secure systems and databases",
          "Access controls",
          "Multi-factor authentication where applicable",
          "Encryption and secure transmission methods",
          "Monitoring and security controls",
          "Staff training and confidentiality obligations",
        ]}
      />

      <H n={9} />
      <p>Ausghan Exchange is required by law to retain certain records.</p>
      <p>We retain:</p>
      <L
        items={[
          "Customer identification records",
          "Verification records",
          "Transaction records",
          "AML/CTF compliance records",
          "Due diligence records",
          "AUSTRAC reporting records for a minimum period of seven (7) years, or longer where required by law.",
        ]}
      />

      <H n={10} />
      <p>Our website may use cookies and similar technologies to:</p>
      <L items={["Improve website functionality", "Analyse website traffic", "Enhance user experience", "Improve security"]} />
      <p>You may disable cookies through your browser settings, however some website functionality may be affected.</p>

      <H n={11} />
      <p>
        You may request access to personal information we hold about you and request corrections if the information is
        inaccurate, incomplete or out of date.
      </p>
      <p>Requests may be limited where:</p>
      <L
        items={[
          "Disclosure is prohibited by law;",
          "AML/CTF obligations apply; or",
          "Providing access would compromise regulatory investigations or compliance obligations.",
        ]}
      />

      <H n={12} />
      <p>If you have a complaint regarding the handling of your personal information, please contact us first.</p>
      <p>
        Email:{" "}
        <a href={`mailto:${site.complaintsEmail}`} className="font-semibold text-brand-700 underline underline-offset-2">
          {site.complaintsEmail}
        </a>
        <br />
        Website: {site.website}
      </p>
      <p>We will investigate and respond within a reasonable timeframe.</p>
      <p>
        If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information
        Commissioner (OAIC).
      </p>

      <H n={13} />
      <p>
        If Ausghan Exchange becomes aware of an eligible data breach involving personal information, we will take reasonable
        steps to contain the breach and comply with our obligations under the Notifiable Data Breaches Scheme, including
        notifying affected individuals and regulators where required.
      </p>

      <H n={14} />
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our services, legal obligations or business
        practices.
      </p>
      <p>The current version will always be available on our website.</p>

      {features.legacyHiddenSections && <PreviousVersion />}
    </LegalLayout>
  )
}

/** Earlier policy text that sat (hidden) under the current one on the old site. */
function PreviousVersion() {
  return (
    <div className="mt-10 border-t border-line pt-10">
      <p>Effective Date: 04 April 2026</p>
      <p>
        Ausghan Exchange is operated by AUSGHAN EXPRESS PTY LTD (ABN: 99 663 648 244) (“we”, “us”, “our”).
        <br />
        We provide remittance and related financial services in Australia.
      </p>
      <h2>1. Compliance with Australian Law</h2>
      <p>We comply with:</p>
      <L
        items={[
          "Privacy Act 1988 (Cth)",
          "Australian Privacy Principles (APPs)",
          "Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act)",
          "AUSTRAC regulatory requirements",
        ]}
      />
      <p>By using our services, you agree to this Privacy Policy.</p>
      <h2>2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <p>We may collect:</p>
      <L
        items={[
          "Full name, date of birth, and address",
          "Phone number and email",
          "Identification documents (passport, driver licence, etc.)",
          "Bank account details and payment information",
          "Transaction details (amount, recipient, purpose)",
          "Source of funds or wealth (if required)",
          "Any information provided during communication",
        ]}
      />
      <p>Failure to provide required information may prevent us from providing services.</p>
      <h3>2.2 Automatically Collected Information</h3>
      <p>We may collect:</p>
      <L items={["Transaction history and records", "Website usage data (pages visited, time spent)", "Communication records (calls, emails, messages)"]} />
      <h3>2.3 Information from Third Parties</h3>
      <p>We may receive information from:</p>
      <L items={["Identity verification providers", "AML/CTF screening and fraud detection services", "Government agencies including AUSTRAC"]} />
      <h2>3. Why We Collect Your Information</h2>
      <h3>3.1 Service Provision</h3>
      <L items={["Process money transfers and transactions", "Provide customer support", "Confirm and manage transactions"]} />
      <h3>3.2 Legal and Regulatory Compliance</h3>
      <ul>
        <li>Verify identity (KYC)</li>
        <li>Conduct sanctions and risk screening</li>
        <li>Monitor transactions</li>
        <li>
          Report to AUSTRAC, including:
          <ul>
            <li>Suspicious Matter Reports (SMRs)</li>
            <li>Threshold Transaction Reports (TTRs)</li>
            <li>International Funds Transfer Instructions (IFTIs)</li>
          </ul>
        </li>
      </ul>
      <p>We may collect, use, and disclose your information without notifying you where required by law.</p>
      <h3>3.3 Fraud Prevention and Security</h3>
      <L items={["Detect and prevent fraud or illegal activity", "Protect our business and customers"]} />
      <h2>4. Disclosure of Personal Information</h2>
      <p>We may disclose your information to:</p>
      <L
        items={[
          "Government authorities (including AUSTRAC)",
          "Identity verification and AML/CTF service providers",
          "IT, cloud, and system providers",
          "Banks, payment providers, and financial institutions",
          "Auditors and compliance professionals",
        ]}
      />
      <p>All third parties are required to protect your information.</p>
      <h2>5. Storage, Security and Retention</h2>
      <p>We take reasonable steps to protect your personal information, including:</p>
      <L items={["Secure systems and encryption", "Access controls and authorised staff only", "Monitoring and system security measures"]} />
      <h3>5.1 Retention</h3>
      <p>We retain:</p>
      <L items={["Customer identification records", "Transaction records", "Compliance documents"]} />
      <p>for a minimum of 7 years, as required by law.</p>
      <h2>6. Cookies and Website Data</h2>
      <p>We use cookies to:</p>
      <L items={["Improve website performance", "Understand user behaviour", "Enhance user experience"]} />
      <p>You can disable cookies in your browser settings.</p>
      <h2>7. Third-Party Links</h2>
      <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
      <h2>8. Access and Correction</h2>
      <p>You may:</p>
      <L items={["Request access to your personal information", "Request correction of inaccurate information", "Withdraw consent for marketing"]} />
      <p>Requests may be limited where required by AML/CTF laws.</p>
      <h2>10. Updates to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>
    </div>
  )
}
