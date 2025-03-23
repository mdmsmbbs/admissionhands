"use client";
import { useEffect, useState } from "react";

const GoogleMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto h-[400px] mb-5 px-6">
      {isClient && (
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56064.5556685239!2d77.31084987343314!3d28.56871982876665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50a4c1cdcfd%3A0xaf809ac4ff102826!2sNoida%20Public%20Senior%20Secondary%20School!5e0!3m2!1sen!2sin!4v1722064885696!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleMap;
