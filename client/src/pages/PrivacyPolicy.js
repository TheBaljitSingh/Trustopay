import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import { BiQuestionMark } from 'react-icons/bi';

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-gray-100 flex flex-col'>
                <div className='container mx-auto px-4 py-12'>
                    <div className='flex flex-col md:flex-row items-start md:items-center mb-8'>
                        <div className='mb-4 animate-fade-up animate-once'>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                                Our Privacy Policy
                            </h1>
                        </div>
                    </div>
                    <div className='bg-white shadow-md rounded-lg p-8'>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            At Trustopay, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our digital escrow platform and associated services.
                        </p>
                        <div className='space-y-6'>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>1. Information We Collect</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    We may collect the following types of information:
                                    <ul className='list-disc list-inside ml-4'>
                                        <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide during registration or when using our services.</li>
                                        <li><strong>Financial Information:</strong> This includes bank account details, payment card information, and transaction details necessary to process payments and manage escrow accounts.</li>
                                        <li><strong>Usage Information:</strong> This includes data about how you interact with our platform, such as pages visited, features used, and transaction history.</li>
                                    </ul>
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>2. How We Use Your Information</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    We use your information for the following purposes:
                                    <ul className='list-disc list-inside ml-4'>
                                        <li><strong>Providing and Improving Our Services:</strong> To process transactions, manage escrow accounts, resolve disputes, and enhance the user experience.</li>
                                        <li><strong>Communication:</strong> To send you transactional emails, notifications, and updates about our services.</li>
                                        <li><strong>Security and Fraud Prevention:</strong> To protect our platform and users from unauthorized access, fraud, and other illegal activities.</li>
                                        <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations, including KYC (Know Your Customer) requirements.</li>
                                    </ul>
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>3. How We Protect Your Information</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, firewalls, and secure data storage.
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>4. Sharing Your Information</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    We may share your information with:
                                    <ul className='list-disc list-inside ml-4'>
                                        <li><strong>Trusted Partners:</strong> Third-party service providers who assist us in operating our platform, such as payment processors, KYC verification providers, and dispute resolution partners like Cadre.</li>
                                        <li><strong>Legal Authorities:</strong> As required by law or to protect our legal rights, we may share your information with law enforcement agencies or other government entities.</li>
                                    </ul>
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>5. Fund Storage</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    All funds held in escrow are stored in designated accounts with RBI-licensed banks, ensuring the safety and security of your money.
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>6. Dispute Resolution</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    In the event of a dispute, we may share relevant information with our dispute resolution partner, Cadre, to facilitate a fair and impartial resolution process.
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>7. Your Choices</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    You can choose to:
                                    <ul className='list-disc list-inside ml-4'>
                                        <li><strong>Update your information:</strong> You can access and update your personal information through your account settings.</li>
                                        <li><strong>Opt-out of communications:</strong> You can unsubscribe from promotional emails by clicking the "unsubscribe" link at the bottom of the email.</li>
                                    </ul>
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>8. Children's Privacy</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children.
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>9. Changes to This Privacy Policy</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                                </p>
                            </section>
                            <section>
                                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>10. Contact Us</h2>
                                <p className='text-gray-700 leading-relaxed'>
                                    If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:hr@trustopay.com" className='text-blue-500 hover:underline'>hr@trustopay.com</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
