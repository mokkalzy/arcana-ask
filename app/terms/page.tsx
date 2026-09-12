import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description: 'Arcana Ask terms of service. Usage terms and conditions for our free tarot reading service.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-8">Terms of Service</h1>
        
        <div className="card space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Agreement to Terms</h2>
            <p>
              By accessing and using Arcana Ask, you accept and agree to be bound by these Terms of Service and our <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>. If you do not agree to these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Service Description</h2>
            <p>
              Arcana Ask provides free online tarot readings for entertainment and self-reflection purposes. We offer various tarot spreads, card meanings, and interpretations based on traditional tarot wisdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Use of Service</h2>
            
            <h3 className="text-lg font-bold text-gold mt-4 mb-2">Permitted Use</h3>
            <p className="mb-2">You may use Arcana Ask for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal tarot readings and reflection</li>
              <li>Learning about tarot cards and meanings</li>
              <li>Entertainment and exploration of tarot</li>
            </ul>

            <h3 className="text-lg font-bold text-gold mt-4 mb-2">Prohibited Use</h3>
            <p className="mb-2">You may NOT:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Copy, reproduce, or scrape our content for commercial purposes</li>
              <li>Attempt to hack, disrupt, or overload our servers</li>
              <li>Use the service for any illegal purposes</li>
              <li>Claim our interpretations as your own work</li>
              <li>Create derivative works without permission</li>
              <li>Use automated bots to access the service excessively</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Intellectual Property</h2>
            <p className="mb-2">
              All content on Arcana Ask, including card interpretations, spread descriptions, articles, and custom card artwork, is our intellectual property or used with permission.
            </p>
            <p className="mb-2">
              <strong>Card artwork:</strong> Our card designs are original creations and not copies of copyrighted Rider-Waite-Smith imagery.
            </p>
            <p>
              <strong>Personal use:</strong> You may use our content for personal, non-commercial purposes. Commercial use or republication requires written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Disclaimer of Warranties</h2>
            <p>
              Arcana Ask is provided "as is" without any warranties, express or implied. We do not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy or reliability of readings</li>
              <li>That the service will meet your specific needs</li>
              <li>That defects will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Arcana Ask and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service, even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-2">
              You understand and agree that you use this service at your own risk. See our <a href="/disclaimer" className="text-gold hover:underline">Disclaimer</a> for important information about the nature of tarot readings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Free Service</h2>
            <p>
              Arcana Ask is currently offered free of charge. We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Introduce optional paid features in the future (while maintaining a free tier)</li>
              <li>Display advertising (though we currently do not)</li>
              <li>Modify or discontinue features</li>
            </ul>
            <p className="mt-2">
              We will never require payment for basic tarot readings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">User Conduct</h2>
            <p className="mb-2">By using Arcana Ask, you agree to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Use the service responsibly and legally</li>
              <li>Respect our intellectual property rights</li>
              <li>Not attempt to harm or disrupt the service</li>
              <li>Not use the service to make harmful decisions (see <a href="/disclaimer" className="text-gold hover:underline">Disclaimer</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Age Requirement</h2>
            <p>
              You must be at least 18 years old to use this service. If you are under 18, you may only use Arcana Ask with the supervision and consent of a parent or guardian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Changes to Terms</h2>
            <p>
              We may revise these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the service after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Contact Information</h2>
            <p>
              Questions about these Terms of Service? Please contact us through our website.
            </p>
          </section>

          <section className="bg-ink-lighter rounded-lg p-4 mt-8">
            <h3 className="text-lg font-bold text-gold mb-2">In Summary</h3>
            <p>
              Use Arcana Ask freely for personal tarot readings and learning. Be respectful, don't copy our content commercially, and remember that tarot is for entertainment and reflection only. By using the service, you accept these terms and our disclaimer that tarot is not professional advice.
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
