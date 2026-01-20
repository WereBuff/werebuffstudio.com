import Section from '../components/Section';

const LegalPage = () => {
    const path = window.location.pathname;

    let title = '';
    let content = null;

    if (path === '/privacy-policy') {
        title = 'Privacy Policy';
        content = (
            <div className="space-y-8">
                <div>
                    <h3 className="text-brand-red font-heading text-2xl mb-4">Privacy Policy (EN)</h3>
                    <p className="body-text mb-4">
                        Werebuff studio co., ltd. ("we") respects your privacy. This policy explains what data we collect,
                        why we collect it, and how we handle it. We collect limited analytics (e.g., pages visited, device type)
                        to improve the site, and contact data only if you provide it (e.g., email).
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Data We Collect</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>Usage analytics via cookies or similar technologies.</li>
                        <li>Contact information if you email us or submit forms.</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">How We Use Data</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>Operate and improve the website experience.</li>
                        <li>Respond to press or business inquiries.</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Your Rights</h4>
                    <p className="body-text mb-4">
                        Depending on your location, you may have rights to access, rectify, or delete personal data.
                        Contact: werebuff.hr@gmail.com.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">International Transfers</h4>
                    <p className="body-text mb-4">
                        We may process data outside your country; we apply reasonable safeguards.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Changes</h4>
                    <p className="body-text">
                        We may update this policy. See the page timestamp for the latest revision.
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <h3 className="text-brand-red font-heading text-2xl mb-4">นโยบายความเป็นส่วนตัว (TH)</h3>
                    <p className="body-text mb-4">
                        บริษัท Werebuff studio co., ltd. ("บริษัทฯ") เคารพความเป็นส่วนตัวของผู้ใช้งาน เอกสารนี้อธิบายประเภทข้อมูลที่เก็บ
                        วัตถุประสงค์ และแนวทางการจัดการข้อมูล เราเก็บสถิติการใช้งานเว็บไซต์ในภาพรวม และเก็บข้อมูลการติดต่อเฉพาะเมื่อท่านสมัครใจให้ข้อมูล
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">ข้อมูลที่เก็บ</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>ข้อมูลวิเคราะห์การใช้งานผ่านคุกกี้หรือเทคโนโลยีที่คล้ายกัน</li>
                        <li>ข้อมูลการติดต่อเมื่อท่านติดต่อบริษัทฯ</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">วัตถุประสงค์</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>ปรับปรุงประสบการณ์ใช้งานเว็บไซต์</li>
                        <li>ตอบกลับการติดต่อทางธุรกิจ/สื่อ</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">สิทธิของท่าน</h4>
                    <p className="body-text mb-4">
                        ท่านอาจมีสิทธิในการเข้าถึง แก้ไข หรือลบข้อมูล ติดต่อ: werebuff.hr@gmail.com
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">การโอนข้อมูลระหว่างประเทศ</h4>
                    <p className="body-text mb-4">
                        ข้อมูลอาจถูกประมวลผลนอกประเทศของท่าน โดยมีมาตรการที่เหมาะสม
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">การเปลี่ยนแปลง</h4>
                    <p className="body-text">
                        บริษัทฯ อาจปรับปรุงนโยบายเป็นระยะ โปรดตรวจสอบวันปรับปรุงล่าสุด
                    </p>
                </div>
            </div>
        );
    } else if (path === '/terms') {
        title = 'Terms of Service';
        content = (
            <div className="space-y-8">
                <div>
                    <h3 className="text-brand-red font-heading text-2xl mb-4">Terms of Service (EN)</h3>
                    <p className="body-text mb-4">
                        By accessing werebuff.com, you agree to these terms. Content is provided "as is" without warranty.
                        Do not misuse the site, attempt to breach security, or infringe intellectual property.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Intellectual Property</h4>
                    <p className="body-text mb-4">
                        All trademarks, logos, and content are owned by Werebuff studio co., ltd. or respective owners.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Links</h4>
                    <p className="body-text mb-4">
                        Third‑party links are provided for convenience; we are not responsible for their content.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Limitation of Liability</h4>
                    <p className="body-text mb-4">
                        We are not liable for indirect or consequential damages arising from site use.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Governing Law</h4>
                    <p className="body-text">
                        These terms are governed by the laws of Thailand unless otherwise required by local law.
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <h3 className="text-brand-red font-heading text-2xl mb-4">ข้อกำหนดการใช้บริการ (TH)</h3>
                    <p className="body-text mb-4">
                        เมื่อท่านเข้าใช้งานเว็บไซต์ werebuff.com ถือว่าท่านยอมรับข้อกำหนดนี้ เนื้อหาให้บริการตามสภาพที่เป็นอยู่โดยไม่มีการรับประกันใด ๆ
                        ห้ามใช้งานในทางมิชอบ เจาะระบบ หรือกระทำการละเมิดทรัพย์สินทางปัญญา
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">ทรัพย์สินทางปัญญา</h4>
                    <p className="body-text mb-4">
                        เครื่องหมายการค้า โลโก้ และเนื้อหาทั้งหมดเป็นของ Werebuff studio co., ltd. หรือเจ้าของที่เกี่ยวข้อง
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">ลิงก์บุคคลที่สาม</h4>
                    <p className="body-text mb-4">
                        เราไม่รับผิดชอบต่อเนื้อหาของเว็บไซต์ภายนอกที่ลิงก์ออกไป
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">ข้อจำกัดความรับผิด</h4>
                    <p className="body-text mb-4">
                        บริษัทฯ ไม่ต้องรับผิดชอบความเสียหายทางอ้อมหรือผลสืบเนื่องจากการใช้งานเว็บไซต์
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">กฎหมายที่ใช้บังคับ</h4>
                    <p className="body-text">
                        ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย เว้นแต่กฎหมายท้องถิ่นกำหนดเป็นอย่างอื่น
                    </p>
                </div>
            </div>
        );
    } else if (path === '/cookie-policy') {
        title = 'Cookie Policy';
        content = (
            <div className="space-y-8">
                <div>
                    <h3 className="text-brand-red font-heading text-2xl mb-4">Cookie Policy (EN)</h3>
                    <p className="body-text mb-4">
                        We use cookies and similar technologies to remember preferences and measure site performance.
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Types</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>Essential: required for basic functionality.</li>
                        <li>Analytics: anonymized usage statistics.</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">Control</h4>
                    <p className="body-text">
                        You can manage cookies in your browser settings or via our banner. Some features may not work without cookies.
                    </p>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <h3 className="text-brand-red font-heading text-2xl mb-4">นโยบายคุกกี้ (TH)</h3>
                    <p className="body-text mb-4">
                        เราใช้คุกกี้และเทคโนโลยีที่คล้ายกันเพื่อจดจำการตั้งค่าของท่านและวัดประสิทธิภาพเว็บไซต์
                    </p>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">ประเภทคุกกี้</h4>
                    <ul className="body-text list-disc list-inside space-y-2">
                        <li>จำเป็นต่อการทำงานพื้นฐานของเว็บไซต์</li>
                        <li>วิเคราะห์การใช้งาน (แบบไม่ระบุตัวตน)</li>
                    </ul>

                    <h4 className="text-brand-white font-heading text-xl mb-3 mt-6">การควบคุม</h4>
                    <p className="body-text">
                        ท่านสามารถจัดการคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์หรือแบนเนอร์ของเรา การปิดคุกกี้บางประเภทอาจทำให้ฟังก์ชันบางอย่างใช้งานไม่ได้
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="snap-container">
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-4xl w-full">
                    <h1 className="heading-red mb-12 text-center">{title}</h1>
                    {content}
                </div>
            </Section>
        </div>
    );
};

export default LegalPage;
