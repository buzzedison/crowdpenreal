import { useEffect } from "react";
import { Script } from "next/script";

export default function GoogleAnalytics() {
  const trackingId = process.env.GA_TRACKING_ID;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}