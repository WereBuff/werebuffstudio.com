import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const JobModal = ({ job, isOpen, onClose }) => {
    if (!job) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-brand-white hover:text-brand-red transition-colors duration-300"
                        >
                            <IoClose size={32} />
                        </button>

                        {/* Job Content */}
                        <div className="space-y-6">
                            {/* Title */}
                            <h2 className="heading-red">{job.title}</h2>

                            {/* Role and Responsibilities */}
                            <div>
                                <h3 className="text-brand-red font-heading font-bold text-2xl mb-3">
                                    {job.role}
                                </h3>
                                <ul className="space-y-2 body-text list-disc list-inside">
                                    {job.responsibilities.map((item, index) => (
                                        <li key={index} className="text-lg md:text-xl">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Qualifications */}
                            <div>
                                <h3 className="text-brand-red font-heading font-bold text-2xl mb-3">
                                    {job.qualifications}
                                </h3>
                                <ul className="space-y-2 body-text list-disc list-inside">
                                    {job.qualificationsList.map((item, index) => (
                                        <li key={index} className="text-lg md:text-xl">{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Send Application Button */}
                            <a
                                href="mailto:werebuff.hr@gmail.com"
                                className="btn-primary inline-block"
                            >
                                Send Application
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default JobModal;
