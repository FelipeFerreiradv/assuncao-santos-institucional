/**
 * Injeta JSON-LD como <script type="application/ld+json"> renderizado no
 * servidor — legível por crawlers e validadores sem execução de JS.
 * Escapa "<" para evitar quebra do documento / injeção.
 */
export function JsonLd({
  data,
  id,
}: {
  data: object | object[];
  id?: string;
}) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
