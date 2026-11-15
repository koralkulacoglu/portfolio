import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Koral Kulacoglu",
    short_name: "Koral",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#f4f0e7",
    theme_color: "#f4f0e7",
    icons: [
      { src: "/icon/192", sizes: "192x192", type: "image/png" },
      { src: "/icon/512", sizes: "512x512", type: "image/png" },
    ],
  };
}
