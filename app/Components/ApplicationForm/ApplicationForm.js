'use client';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        zip: '',
        dob: '',
        studentType: '',
        areaOfStudy: '',
        degreeLevel: '',
        additionalInfo: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="py-25">
            <div className="container mx-auto px-4 py-5 md:px-8 lg:px-16 bg-[#F6F6F6]">
                <form onSubmit={handleSubmit} className="p-6 bg-[#F6F6F6]">
                    <h3 className="text-2xl font-semibold text-black mb-4">Applicant Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['First Name', 'Last Name', 'Email Address', 'Phone Number', 'State Name', 'Zip Code', 'Date of Birth'].map((label, index) => (
                            <div key={index}>
                                <label className="block text-gray-700 font-medium mb-1">{label}</label>
                                <input
                                    type="text"
                                    name={label.toLowerCase().replace(/ /g, '')}
                                    value={formData[label.toLowerCase().replace(/ /g, '')]}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border border-gray-500 focus:outline-none focus:ring focus:ring-red-500 placeholder-gray-700 text-gray-700`}
                                    placeholder={label}
                                />
                            </div>
                        ))}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Student Type</label>
                            <select
                                name="studentType"
                                value={formData.studentType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-500 focus:outline-none focus:ring focus:ring-red-500 text-gray-700"
                            >
                                <option className="text-gray-700" value="">Select Student Type</option>
                                <option className="text-gray-700" value="1">One</option>
                                <option className="text-gray-700" value="2">Two</option>
                                <option className="text-gray-700" value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-black mt-6 mb-4">Education Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Select Area of Study</label>
                            <select
                                name="areaOfStudy"
                                value={formData.areaOfStudy}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                            >
                                <option className="text-gray-700" value="">Please select subject</option>
                                <option className="text-gray-700" value="1">One</option>
                                <option className="text-gray-700" value="2">Two</option>
                                <option className="text-gray-700" value="3">Three</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Degree Level</label>
                            <input
                                type="text"
                                name="degreeLevel"
                                value={formData.degreeLevel}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-700 text-gray-700"
                                placeholder="Bachelor’s Degree"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 font-medium mb-1">Additional Information</label>
                        <textarea
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="w-full h-36 px-4 py-3 border border-gray-500 focus:outline-none focus:ring focus:ring-red-500 placeholder-gray-700 text-gray-700"
                            placeholder="Questions? Anything you’d like to know or ask..."
                        ></textarea>
                    </div>

                    <div className="flex items-center mt-4 my-4">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="mr-2 w-5 h-5 mb-4"
                        />
                        <label className="text-gray-700 mb-4">
                            By submitting this form, you agree to the Adma University{' '}
                            <a href="#" className="text-red-500 hover:underline">privacy notice</a>.
                        </label>
                    </div>

                    <button type="submit" className="bg-red-500 text-white px-6 py-4 w-full flex items-center justify-center">
                        Submit Application <FaArrowRight className="ml-2" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
