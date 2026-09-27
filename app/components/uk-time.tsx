"use client";
import { useEffect, useState } from "react";

const ukTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const formatUKTime = () => ukTimeFormatter.format(new Date());

export default function UKTime() {
  const [time, setTime] = useState(formatUKTime);

  useEffect(() => {
    let timeoutId: number;

    const updateTime = () => {
      setTime(formatUKTime());

      const millisecondsUntilNextMinute = 60_000 - (Date.now() % 60_000);

      timeoutId = window.setTimeout(updateTime, millisecondsUntilNextMinute);
    };

    timeoutId = window.setTimeout(updateTime, 60_000 - (Date.now() % 60_000));

    return () => window.clearTimeout(timeoutId);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
