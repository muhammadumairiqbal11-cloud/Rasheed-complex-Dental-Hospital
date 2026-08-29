import React from 'react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      id="floating-whatsapp-btn"
      href="https://wa.me/923286560560"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rasheed Hospital & Dental Complex on WhatsApp"
      title="Chat with Rasheed Hospital & Dental Complex on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus:outline-hidden focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-white translate-x-px"
        aria-hidden="true"
      >
        <path d="M12.031 0C5.396 0 .029 5.367.029 12.002c0 2.119.553 4.187 1.603 6.008L0 24l6.166-1.618a11.966 11.966 0 005.865 1.52h.005c6.633 0 12.002-5.368 12.002-12.003A12.008 12.008 0 0012.031 0zm0 21.942a9.96 9.96 0 01-5.074-1.39l-.364-.216-3.768.988 1.006-3.673-.237-.377a9.92 9.92 0 01-1.528-5.272c0-5.503 4.477-9.98 9.983-9.98a9.93 9.93 0 017.06 2.923 9.93 9.93 0 012.92 7.062c0 5.504-4.477 9.978-9.98 9.978zm5.474-7.476c-.3-.15-1.776-.877-2.052-.977-.275-.1-.475-.15-.675.15-.2.3-.775.977-.95 1.177-.175.2-.35.225-.65.075s-1.267-.467-2.414-1.488a9.01 9.01 0 01-1.67-2.072c-.175-.3-.019-.462.131-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.625-.925-2.225c-.244-.585-.492-.505-.675-.515-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502s1.075 2.899 1.225 3.1c.15.2 2.115 3.23 5.123 4.53.715.31 1.273.495 1.708.633.718.228 1.371.196 1.888.119.577-.086 1.776-.726 2.026-1.427.25-.7.25-1.301.175-1.426-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
};
