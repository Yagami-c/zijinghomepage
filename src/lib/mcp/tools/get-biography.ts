import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { biography, profile } from "../data";

export default defineTool({
  name: "get_biography",
  title: "Get biography",
  description:
    "Return the biography of classical pianist Zijing Zeng (曾子荆 / Цзыцзин Цзэн) in the requested language.",
  inputSchema: {
    language: z
      .enum(["en", "ru", "zh"])
      .optional()
      .describe("Language of the biography: 'en' (English), 'ru' (Russian), 'zh' (Chinese). Defaults to 'en'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const text = biography[lang];
    const name = profile.name[lang];
    const title = profile.title[lang];
    return {
      content: [{ type: "text", text: `${name} — ${title}\n\n${text}` }],
      structuredContent: { language: lang, name, title, biography: text },
    };
  },
});
