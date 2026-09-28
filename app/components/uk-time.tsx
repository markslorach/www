"use client";
import { useEffect, useState } from "react";

const getTime = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export default function UKTime() {
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTime());
    }, 1_000);

    return () => clearInterval(timerId);
  }, []);

  return <span>{time}</span>;
}
