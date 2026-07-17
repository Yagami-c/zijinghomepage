import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { contact, profile } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Return public contact information and official website for classical pianist Zijing Zeng.",
  inputSchema: {
    language: z
      .enum(["en", "ru", "zh"])
      .optional()
      .describe("Language for human-readable fields. Defaults to 'en'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const name = profile.name[lang];
    const title = profile.title[lang];
    const location = contact.location[lang];
    const text = `${name} — ${title}\nLocation: ${location}\nWebsite: ${contact.website}\n\nFor concert bookings and collaboration inquiries, please use the contact form on the official website.`;
    return {
      content: [{ type: "text", text }],
      structuredContent: {
        language: lang,
        name,
        title,
        location,
        website: contact.website,
      },
    };
  },
});
