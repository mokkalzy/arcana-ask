import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Disclaimer - Entertainment Purposes Only',
  description: 'Arcana Ask disclaimer. Tarot readings are for entertainment and reflection purposes only, not professional advice.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-gold mb-8">Disclaimer</h1>
        
        <div className="card space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Entertainment and Reflection Only</h2>
            <p>
              All tarot readings, interpretations, and guidance provided on Arcana Ask are for <strong>entertainment and self-reflection purposes only</strong>. Tarot is a tool for gaining perspective and exploring possibilities, not for predicting the future with certainty or making definitive life decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Not Professional Advice</h2>
            <p className="mb-3">
              Tarot readings on this site are NOT a substitute for professional advice in any area, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Medical advice:</strong> Never use tarot to diagnose, treat, or make medical decisions. Consult qualified healthcare professionals for health concerns.</li>
              <li><strong>Legal advice:</strong> Tarot cannot provide legal guidance. Consult an attorney for legal matters.</li>
              <li><strong>Financial advice:</strong> Do not make financial or investment decisions based on tarot readings. Seek professional financial advisors.</li>
              <li><strong>Mental health care:</strong> If you're experiencing mental health challenges, please consult a licensed therapist or counselor.</li>
              <li><strong>Relationship counseling:</strong> While tarot may offer perspective on relationships, it's not a replacement for professional couples or individual therapy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Personal Responsibility</h2>
            <p>
              You are responsible for your own choices and actions. Tarot readings offer perspective and food for thought, but you maintain free will and ultimate responsibility for your decisions. Do not make major life decisions based solely on tarot readings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Accuracy and Interpretation</h2>
            <p>
              Tarot interpretations are subjective and symbolic. Different readers may interpret cards differently, and meanings can vary based on context, question, and surrounding cards. Our interpretations are based on traditional Rider-Waite-Smith meanings but are not absolute or guaranteed to be accurate for every situation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">No Guarantees</h2>
            <p>
              We make no guarantees, warranties, or promises regarding the accuracy, completeness, or reliability of any tarot readings, interpretations, or information provided. Outcomes suggested in readings are possibilities, not certainties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Limitation of Liability</h2>
            <p>
              Arcana Ask, its creators, and contributors are not liable for any decisions made, actions taken, or outcomes experienced as a result of using this website or following guidance from tarot readings. Use this service at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Age Restriction</h2>
            <p>
              This service is intended for users 18 years of age or older. If you are under 18, please use this site with parental guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Harmful Questions</h2>
            <p>
              We do not encourage and cannot provide reliable guidance on questions related to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Self-harm or harm to others</li>
              <li>Pregnancy or medical diagnoses</li>
              <li>Legal outcomes or court cases</li>
              <li>Financial investments or gambling</li>
              <li>Death predictions or timing</li>
            </ul>
            <p className="mt-3">
              If you're in crisis, please contact appropriate emergency services or crisis hotlines in your area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-3">Agreement</h2>
            <p>
              By using Arcana Ask, you acknowledge that you have read, understood, and agree to this disclaimer. You understand that tarot readings are for entertainment purposes and accept full responsibility for your interpretations and actions.
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
