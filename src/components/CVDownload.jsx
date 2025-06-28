import { useState } from 'react';

const CVDownload = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvPath = '/cv.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Shivang_Paliwal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isHovered 
          ? 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white' 
          : 'bg-white text-blue-600 border border-blue-600'
      }`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      Download CV
    </button>
  );
};

export default CVDownload; 