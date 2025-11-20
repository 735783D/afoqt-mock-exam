import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Attention-Getting Banner Above Mode Selection */}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 border-4 border-red-600 rounded-lg p-6 mb-8 shadow-2xl animate-pulse">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-12 h-12 text-white animate-bounce" />
            <div>
              <h2 className="text-3xl font-black text-white mb-2 tracking-wide">
                ⚠️ READ THIS FIRST! ⚠️
              </h2>
              <p className="text-white font-bold text-lg">
                Important Legal Information & Disclaimers
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-black text-xl hover:bg-gray-100 transition transform hover:scale-105 shadow-lg border-4 border-red-600"
          >
            VIEW DISCLAIMER
          </button>
        </div>
      </div>

      {/* Full-Page Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="sticky top-4 right-4 float-right bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 text-center">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-5xl font-black mb-4 tracking-wide">
                ⚠️ READ THIS FIRST! ⚠️
              </h1>
              <h2 className="text-2xl font-bold">
                Legal Disclaimer & Terms of Use
              </h2>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* No Affiliation */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  No Affiliation or Endorsement
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  This practice exam application is an <strong>independent educational tool</strong> and is <strong className="text-red-600">NOT affiliated with, endorsed by, or sponsored by</strong> the United States Air Force, Department of Defense, or any government agency. All trademarks, service marks, and company names are the property of their respective owners.
                </p>
              </div>

              {/* No Guarantee */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  No Guarantee of Results
                </h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>This practice exam does <strong className="text-red-600">NOT guarantee passing scores</strong> on the actual AFOQT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>This practice exam does <strong className="text-red-600">NOT guarantee acceptance</strong> into the United States Air Force or any military branch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Actual exam content, difficulty, and scoring <strong>may differ significantly</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Performance on this practice exam is <strong>not indicative</strong> of performance on the official AFOQT</span>
                  </li>
                </ul>
              </div>

              {/* Educational Purpose */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Educational Purpose Only
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  This mock exam is provided solely for <strong>educational and practice purposes</strong>. It is designed to help individuals prepare for the Air Force Officer Qualifying Test (AFOQT) by familiarizing themselves with question formats and content areas. As well as the endurance requrired to sit for the AFOQT.
                </p>
              </div>

              {/* Accuracy Disclaimer */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Accuracy Disclaimer
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  While every effort has been made to ensure accuracy, we make <strong>no warranties or representations</strong> regarding the completeness, accuracy, or reliability of the content. Questions and explanations are approximations based on publicly available information about the AFOQT format.
                </p>
              </div>

              {/* Use at Own Risk */}
              <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Use at Your Own Risk
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  Users assume all responsibility for their use of this application. We are not liable for any damages, losses, or consequences resulting from use of this practice exam.
                </p>
              </div>

              {/* Official Resources */}
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Official Testing Information
                </h3>
                <p className="text-gray-800 leading-relaxed mb-3">
                  For official AFOQT information, testing dates, and requirements, please consult:
                </p>
                <ul className="space-y-2 text-gray-800">
                  <li>• Official Air Force Recruiting: <a href="https://www.airforce.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">airforce.com</a></li>
                  <li>• Your local Air Force recruiter</li>
                  <li>• Official AFOQT testing centers</li>
                </ul>
              </div>

              {/* Copyright */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Copyright & Usage
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  © 2025. All rights reserved. This application is provided free of charge for personal, non-commercial educational use only.
                </p>
              </div>

              {/* Acknowledgment */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">
                  By using this application, you acknowledge that you have read, understood, and agree to these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
