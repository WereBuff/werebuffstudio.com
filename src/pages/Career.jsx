import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import FooterSection from '../components/FooterSection';
import JobModal from '../components/JobModal';
import { jobsData } from '../data/jobsData';

const Career = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openJobModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeJobModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedJob(null), 300);
    };

    return (
        <div className="snap-container">
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-4xl w-full text-center">
                    <h1 className="heading-red mb-6">
                        <span className="text-brand-red">If You Are Interested</span><br />
                        <span className="text-brand-white">In Working With Us.</span>
                    </h1>
                    <p className="body-text mb-12 max-w-2xl mx-auto">
                        We have exciting open positions for talented people like you.<br />
                        Join us and become part of our small team.
                    </p>

                    {/* Job Listings - Single Column Layout */}
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {jobsData.map((job) => (
                            <div
                                key={job.id}
                                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-brand-red transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 text-left">
                                        <h3 className="text-brand-white font-heading font-bold text-2xl mb-3">
                                            {job.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {job.responsibilities[0]}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => openJobModal(job)}
                                        className="btn-primary ml-6 whitespace-nowrap"
                                    >
                                        Read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12">
                        <p className="body-text mb-2">
                            If you have questions pertaining to a submitted application or a job listing,
                        </p>
                        <p className="body-text">
                            please direct them to our Human Resources Department:
                        </p>
                        <p className="body-text text-brand-red mt-2">
                            werebuff.hr@gmail.com
                        </p>
                    </div>
                </div>
            </Section>

            {/* Footer Section */}
            <FooterSection />

            {/* Job Modal */}
            <JobModal job={selectedJob} isOpen={isModalOpen} onClose={closeJobModal} />
        </div>
    );
};

export default Career;
