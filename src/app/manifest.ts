import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// PENDENTE: substituir os ícones por PNGs quadrados oficiais (192px e 512px,
// versão do logo A&S com fundo transparente) quando a cliente enviar.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#0b0f19",
    lang: "pt-BR",
    icons: [
      {
        src: "/logo-assuncao-santos.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
