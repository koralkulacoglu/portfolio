"use client";

import { useEffect } from "react";

export default function Favicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const style = getComputedStyle(document.documentElement);
    ctx.fillStyle = style.getPropertyValue("--kk-favicon-bg") || "#1e293b";
    ctx.fillRect(0, 0, 64, 64);
    ctx.font = "bold 36px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("KK", 32, 36);
    let link = document.querySelector(
      'link[rel="icon"]'
    ) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = canvas.toDataURL();
  }, []);
  return null;
}
