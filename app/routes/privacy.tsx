import type { MetaFunction } from "react-router";
import { BASE_URL } from "@/assets/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = () => {
  const title = "Privacy Policy";
  const description =
    "Stoneworks PDX privacy policy. Learn how we collect, use, and protect your personal information.";
  const canonical = `${BASE_URL}/privacy`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },   
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    
    { name: "robots", content: "noindex" },
  ];
};

export default function PrivacyRoute() {
  return (
    <>
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stoneworks PDX ("we," "our," or "us") respects your privacy and is
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may collect information about you in a variety of ways:
            </p>
            <h3 className="font-semibold text-foreground mb-2">Personal Data</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              When you request an estimate or contact us, we may collect
              personally identifiable information, such as your name, phone
              number, email address, and mailing address.
            </p>
            <h3 className="font-semibold text-foreground mb-2">
              Project Information
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We collect information about your project, including descriptions,
              photos you upload, and preferences for services.
            </p>
            <h3 className="font-semibold text-foreground mb-2">Usage Data</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We may automatically collect certain information about your
              device, including your IP address, browser type, operating system,
              and browsing patterns.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Respond to your inquiries and provide estimates</li>
              <li>Communicate with you about your project</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Information Sharing
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with trusted service
              providers who assist us in operating our website and conducting
              our business, as long as those parties agree to keep this
              information confidential.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement reasonable security measures to protect your personal
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Your Rights
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at
              stoneworkspdx@agamalabs.com
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Cookies
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our website may use cookies to enhance your browsing experience.
              You can set your browser to refuse cookies, but some features of
              the site may not function properly.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-2 leading-relaxed">
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <ul className="text-muted-foreground mb-6 space-y-1">
              <li>Email: stoneworkspdx@agamalabs.com</li>
              <li>Address: Portland, OR</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
