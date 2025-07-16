import { Container } from '@/components/core/container'
import { Footer } from '@/components/core/footer'
import { GradientBackground } from '@/components/core/gradient'
import { Navbar } from '@/components/core/navbar'
import { Heading, Lead } from '@/components/core/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Be Startup - Your AI Co-founder platform. Learn how we protect and handle your data.',
}

function PolicySection({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-sm/6 text-gray-600">
        {children}
      </div>
    </section>
  )
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Privacy Policy</Heading>
      <Lead className="mt-6 max-w-3xl">
        Your privacy is important to us. This Privacy Policy explains how Be Startup collects, uses, and protects your personal information when you use our AI-powered startup platform.
      </Lead>
      <div className="mt-6 text-sm text-gray-500">
        Last updated: July 16, 2025
      </div>
    </Container>
  )
}

function PolicyContent() {
  return (
    <Container className="mt-16 max-w-4xl">
      <PolicySection title="1. Information We Collect">
        <p>
          We collect information you provide directly to us, such as when you create an account, use our AI tools, or contact us for support. This may include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name, email address, and contact information</li>
          <li>Business information and startup details you share with our AI tools</li>
          <li>Payment information (processed securely through third-party providers)</li>
          <li>Content you create using our AI tools (business plans, code, images, etc.)</li>
          <li>Usage data and analytics about how you interact with our platform</li>
        </ul>
      </PolicySection>

      <PolicySection title="2. How We Use Your Information">
        <p>
          We use the information we collect to provide, maintain, and improve our services:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide AI-powered business planning, code generation, and content creation tools</li>
          <li>To personalize your experience and provide relevant recommendations</li>
          <li>To process payments and manage your account</li>
          <li>To communicate with you about updates, features, and support</li>
          <li>To analyze usage patterns and improve our AI models (in anonymized form)</li>
          <li>To detect and prevent fraud or abuse</li>
        </ul>
      </PolicySection>

      <PolicySection title="3. AI and Machine Learning">
        <p>
          Our platform uses artificial intelligence to provide personalized recommendations and generate content. Here's how we handle AI-related data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your inputs to AI tools may be used to improve our models, but are anonymized and aggregated</li>
          <li>Generated content (business plans, code, etc.) belongs to you</li>
          <li>We implement safeguards to protect sensitive business information</li>
          <li>You can opt out of AI model training by contacting us</li>
        </ul>
      </PolicySection>

      <PolicySection title="4. Data Sharing and Disclosure">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations or court orders</li>
          <li>To protect our rights, privacy, safety, or property</li>
          <li>With service providers who assist us in operating our platform (under strict confidentiality agreements)</li>
          <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
        </ul>
      </PolicySection>

      <PolicySection title="5. Data Security">
        <p>
          We implement industry-standard security measures to protect your data:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security audits and penetration testing</li>
          <li>Access controls and authentication measures</li>
          <li>Secure data centers with physical security controls</li>
          <li>Employee training on data protection and privacy</li>
        </ul>
      </PolicySection>

      <PolicySection title="6. Data Retention">
        <p>
          We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account information: Until you delete your account</li>
          <li>Generated content: Until you delete it or close your account</li>
          <li>Usage analytics: Up to 2 years in aggregated, anonymized form</li>
          <li>Payment information: As required by law for tax and accounting purposes</li>
        </ul>
      </PolicySection>

      <PolicySection title="7. Your Rights and Choices">
        <p>
          You have several rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access: Request a copy of the personal information we hold about you</li>
          <li>Correction: Update or correct your personal information</li>
          <li>Deletion: Request deletion of your personal information</li>
          <li>Portability: Request your data in a portable format</li>
          <li>Opt-out: Unsubscribe from marketing communications</li>
          <li>Restrict processing: Limit how we use your information</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at privacy@bestartup.com.
        </p>
      </PolicySection>

      <PolicySection title="8. Cookies and Tracking">
        <p>
          We use cookies and similar technologies to enhance your experience:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Essential cookies for platform functionality</li>
          <li>Analytics cookies to understand usage patterns</li>
          <li>Preference cookies to remember your settings</li>
          <li>Marketing cookies for relevant advertising (with consent)</li>
        </ul>
        <p className="mt-4">
          You can control cookie preferences through your browser settings.
        </p>
      </PolicySection>

      <PolicySection title="9. Third-Party Services">
        <p>
          Our platform integrates with third-party services to enhance functionality. These services have their own privacy policies:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Payment processors (Stripe, PayPal)</li>
          <li>Analytics providers (Google Analytics)</li>
          <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
          <li>AI model providers (OpenAI, Anthropic)</li>
        </ul>
      </PolicySection>

      <PolicySection title="10. International Data Transfers">
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Standard contractual clauses approved by regulatory authorities</li>
          <li>Adequacy decisions by relevant data protection authorities</li>
          <li>Certification schemes and codes of conduct</li>
        </ul>
      </PolicySection>

      <PolicySection title="11. Children's Privacy">
        <p>
          Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
        </p>
      </PolicySection>

      <PolicySection title="12. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Posting the updated policy on our website</li>
          <li>Sending an email notification to registered users</li>
          <li>Displaying a prominent notice on our platform</li>
        </ul>
        <p className="mt-4">
          Your continued use of our services after the effective date constitutes acceptance of the updated policy.
        </p>
      </PolicySection>

      <PolicySection title="13. Contact Information">
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="mt-4 space-y-2">
          <p>Email: privacy@bestartup.com</p>
          <p>Address: Be Startup Privacy Team</p>
          <p>Response time: We aim to respond within 48 hours</p>
        </div>
      </PolicySection>
    </Container>
  )
}

export default function Privacy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Header />
        <PolicyContent />
      </Container>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  )
}
