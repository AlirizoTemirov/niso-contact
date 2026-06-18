"use client";

import { useEffect } from "react";

type MotionName = "fade" | "rise" | "drop" | "pop";

const keyframes: Record<MotionName, Keyframe[]> = {
  fade: [
    { opacity: 0, transform: "scale(1.035)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  rise: [
    { opacity: 0, transform: "translateY(24px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],
  drop: [
    { opacity: 0, transform: "translateY(-16px)" },
    { opacity: 1, transform: "translateY(0)" },
  ],
  pop: [
    { opacity: 0, transform: "scale(.86)" },
    { opacity: 1, transform: "scale(1)" },
  ],
};

export default function EntranceMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = document.querySelectorAll<HTMLElement>("[data-motion]");
    const animations: Animation[] = [];

    elements.forEach((element) => {
      const motion = (element.dataset.motion ?? "rise") as MotionName;
      const delay = Number(element.dataset.delay ?? 0);
      const duration = Number(element.dataset.duration ?? 650);

      const animation = element.animate(keyframes[motion], {
        duration,
        delay,
        easing: "cubic-bezier(.22, 1, .36, 1)",
        fill: "backwards",
      });

      animations.push(animation);
    });

    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  return null;
}
