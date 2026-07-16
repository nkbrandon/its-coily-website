import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | It's Coily",
  description: "Privacy policy for It's Coily.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <p className="mb-6 text-sm text-gray-500">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to It&apos;s Coily. We respect your privacy and are committed
          to protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>
          We may collect information such as your name and email address when
          you sign up for our newsletter, leave a comment, or contact us. We
          also automatically collect certain data (like browser type and pages
          visited) through cookies and analytics tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>
          We use the information we collect to operate and improve our website,
          send newsletters you&apos;ve subscribed to, respond to your messages,
          and understand how visitors use our content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can choose to disable cookies through your browser settings, though
          this may affect some site functionality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
        <p>
          We may use third-party services (such as analytics providers) that
          collect, monitor, and analyze data to help us improve our website.
          These third parties have their own privacy policies governing their
          use of your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out
          to us through our contact page.
        </p>
      </section>
    </main>
  );
}
