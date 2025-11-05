import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nondiscrimination Notice",
  description: "Our commitment to providing healthcare services without discrimination based on race, color, national origin, age, disability, or sex.",
};

export default function NondiscriminationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="font-serif text-4xl font-bold text-medical-blue-900 mb-8">
            Nondiscrimination Notice
          </h1>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-medical-blue-200 bg-medical-blue-50">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold text-medical-blue-900 mb-4">
                  HealthCare Medical Practice complies with applicable Federal civil rights laws and does not
                  discriminate on the basis of race, color, national origin, age, disability, or sex.
                </p>
              </CardContent>
            </Card>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-gray-700 mb-4">
                HealthCare Medical Practice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex</li>
                <li>Provides free aids and services to people with disabilities to communicate effectively with us, such as:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Qualified sign language interpreters</li>
                    <li>Written information in other formats (large print, audio, accessible electronic formats, other formats)</li>
                  </ul>
                </li>
                <li>Provides free language services to people whose primary language is not English, such as:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>Qualified interpreters</li>
                    <li>Information written in other languages</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                How to Request Assistance
              </h2>
              <p className="text-gray-700 mb-4">
                If you need these services, please contact our Civil Rights Coordinator:
              </p>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle className="text-lg">Civil Rights Coordinator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    <strong>Name:</strong> Patient Relations Department<br />
                    <strong>Phone:</strong> (555) 123-4567<br />
                    <strong>TTY:</strong> 711<br />
                    <strong>Email:</strong> civilrights@healthcaremp.com<br />
                    <strong>Address:</strong> 123 Medical Center Drive, Suite 100<br />
                    Healthcare City, HC 12345
                  </p>
                </CardContent>
              </Card>
              <p className="text-gray-700">
                We encourage you to contact us at least 48 hours in advance of your appointment to ensure we can
                arrange the appropriate services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Filing a Grievance
              </h2>
              <p className="text-gray-700 mb-4">
                If you believe that HealthCare Medical Practice has failed to provide these services or discriminated
                in another way on the basis of race, color, national origin, age, disability, or sex, you can file a
                grievance with:
              </p>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Civil Rights Coordinator</strong><br />
                    123 Medical Center Drive, Suite 100<br />
                    Healthcare City, HC 12345<br />
                    Phone: (555) 123-4567<br />
                    Email: civilrights@healthcaremp.com
                  </p>
                  <p className="text-gray-700">
                    You can file a grievance in person or by mail, fax, or email. If you need help filing a grievance,
                    our Civil Rights Coordinator is available to help you.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Filing a Complaint with Federal Agencies
              </h2>
              <p className="text-gray-700 mb-4">
                You can also file a civil rights complaint with the U.S. Department of Health and Human Services,
                Office for Civil Rights, electronically through the Office for Civil Rights Complaint Portal, or by mail or phone at:
              </p>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-700">
                    <strong>U.S. Department of Health and Human Services</strong><br />
                    200 Independence Avenue, SW<br />
                    Room 509F, HHH Building<br />
                    Washington, D.C. 20201<br />
                    Phone: 1-800-368-1019, 800-537-7697 (TDD)<br />
                    Complaint Portal: <span className="text-medical-blue-600">https://ocrportal.hhs.gov/ocr/portal/lobby.jsf</span><br />
                    Complaint Forms: <span className="text-medical-blue-600">http://www.hhs.gov/ocr/office/file/index.html</span>
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-medical-blue-900 mb-4">
                Language Assistance Services
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>ATTENTION:</strong> If you speak a language other than English, language assistance services,
                free of charge, are available to you. Call (555) 123-4567.
              </p>
              <div className="bg-medical-neutral-100 p-6 rounded-lg space-y-3 text-sm">
                <p><strong>SPANISH (Español):</strong> ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al (555) 123-4567.</p>
                <p><strong>CHINESE (中文):</strong> 注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電 (555) 123-4567。</p>
                <p><strong>VIETNAMESE (Tiếng Việt):</strong> CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số (555) 123-4567.</p>
                <p><strong>KOREAN (한국어):</strong> 주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다. (555) 123-4567 번으로 전화해 주십시오.</p>
                <p><strong>TAGALOG (Tagalog):</strong> PAUNAWA: Kung nagsasalita ka ng Tagalog, maaari kang gumamit ng mga serbisyo ng tulong sa wika nang walang bayad. Tumawag sa (555) 123-4567.</p>
                <p><strong>RUSSIAN (Русский):</strong> ВНИМАНИЕ: Если вы говорите на русском языке, то вам доступны бесплатные услуги перевода. Звоните (555) 123-4567.</p>
                <p><strong>ARABIC (العربية):</strong> ملحوظة: إذا كنت تتحدث اذكر اللغة، فإن خدمات المساعدة اللغوية تتوافر لك بالمجان. اتصل برقم 4567-123 (555).</p>
                <p><strong>FRENCH CREOLE (Kreyòl Ayisyen):</strong> ATANSYON: Si w pale Kreyòl Ayisyen, gen sèvis èd pou lang ki disponib gratis pou ou. Rele (555) 123-4567.</p>
              </div>
            </section>

            <p className="text-gray-600 text-sm mt-8">
              <strong>Last Updated:</strong> November 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
