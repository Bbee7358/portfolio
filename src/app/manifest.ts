import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Portfolio",
    short_name: "Portfolio",
    description: "自己紹介、制作実績、連絡先をまとめたポートフォリオサイトです。",
    start_url: "/",
    display: "standalone",
    background_color: "#f3ecde",
    theme_color: "#201a16",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
