"use client";

import { useEffect } from "react";
import { Button } from "./button";
import { MoveRight } from "lucide-react";

const CalendlyCTA = () => {
  useEffect(() => {
    const calendlyBtn = document.getElementById("calendly-cta-btn");

    const handleClick = (e ) => {
      e.preventDefault(); // Prevent default behavior (if needed)
      const calendlyUrl = "https://calendly.com/echemartins47";
      window.open(calendlyUrl, "_blank"); // Opens the link in a new tab
    };

    if (calendlyBtn) {
      calendlyBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (calendlyBtn) {
        calendlyBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <Button
      id="calendly-cta-btn"
      className="mt-4 bg-primary text-white hover:bg-primary/90"
    >
      Book a free consult
      <MoveRight className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default CalendlyCTA;
