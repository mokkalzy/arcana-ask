import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'Arcana Ask privacy policy. Learn how we handle your data, cookies, and analytics.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-8">Privacy Policy</h1>
        
        <div className="card space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Our Commitment to Privacy</h2>
            <p>
              At Arcana Ask, we believe in transparency and your right to privacy. This policy explains what information we collect, how we use it, and your choices regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Information We Collect</h2>
            
            <h3 className="text-lg font-bold text-gold mt-4 mb-2">No Account Required</h3>
            <p className="mb-3">
              Arcana Ask does not require you to create an account, sign up, or provide personal information to use our tarot readings. You can use our service completely anonymously.
            </p>

            <h3 className="text-lg font-bold text-gold mt-4 mb-2">Locally Stored Data</h3>
            <p className="mb-3">
              Your tarot readings are saved in your browser's local storage on your device. This data:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Never leaves your device</li>
              <li>Is not transmitted to our servers</li>
              <li>Can be cleared by clearing your browser data</li>
              <li>Is private to you and your device</li>
            </ul>

            <h3 className="text-lg font-bold text-gold mt-4 mb-2">Analytics (Optional)</h3>
            <p>
              If enabled, we use Google Analytics to understand how visitors use our site. This collects:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pages viewed and time spent</li>
              <li>General location (city/country level, not precise)</li>
              <li>Device type and browser</li>
              <li>How you found our site</li>
            </ul>
            <p className="mt-2">
              Analytics data is aggregated and anonymous. We do not track individual users or store personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Cookies</h2>
            <p className="mb-2">
              We use minimal cookies:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Essential cookies:</strong> Required for the site to function (your saved readings in local storage)</li>
              <li><strong>Analytics cookies (if enabled):</strong> Google Analytics cookies to understand site usage</li>
            </ul>
            <p className="mt-2">
              You can disable cookies in your browser settings, though this may affect functionality like saving your reading history.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Email Collection (If Applicable)</h2>
            <p>
              If we offer an email newsletter or reading-saving feature via email in the future, your email will only be used for that specific purpose. We will:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Never sell or share your email with third parties</li>
              <li>Only send you content you explicitly requested</li>
              <li>Provide an easy way to unsubscribe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Data Security</h2>
            <p>
              Since your reading data is stored locally on your device and we don't collect personal information, there is minimal security risk from our end. However, we recommend:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Using secure, up-to-date browsers</li>
              <li>Not using public/shared computers for private readings</li>
              <li>Clearing your browser data if using a shared device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Third-Party Services</h2>
            <p className="mb-2">
              We may use these third-party services:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Google Analytics:</strong> For anonymous usage statistics</li>
              <li><strong>Hosting provider (Vercel):</strong> For website hosting and delivery</li>
            </ul>
            <p className="mt-2">
              These services have their own privacy policies. We choose providers with strong privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Your Rights and Choices</h2>
            <p className="mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clear your locally stored reading history at any time</li>
              <li>Disable cookies in your browser</li>
              <li>Use browser extensions to block analytics</li>
              <li>Browse in private/incognito mode</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Children's Privacy</h2>
            <p>
              Our service is intended for users 18 and older. We do not knowingly collect information from anyone under 18. If you're under 18, please use this site with parental guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy or your data, please contact us through our website.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Last updated: September 2026</p>
        </div>
      </div>
    </div>
  );
}
