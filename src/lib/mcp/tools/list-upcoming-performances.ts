import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { performances } from "../data";

export default defineTool({
  name: "list_upcoming_performances",
  title: "List upcoming performances",
  description:
    "List Zijing Zeng's upcoming concerts (date, venue, program). Past performances are filtered out automatically.",
  inputSchema: {
    language: z
      .enum(["en", "ru", "zh"])
      .optional()
      .describe("Language for the human-readable date, venue and program strings. Defaults to 'en'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = language ?? "en";
    const now = Date.now();
    const upcoming = performances
      .filter((p) => new Date(p.isoDate).getTime() >= now)
      .map((p) => ({
        isoDate: p.isoDate,
        date: p.date[lang],
        venue: p.venue[lang],
        program: p.program[lang],
      }));

    const text =
      upcoming.length === 0
        ? "No upcoming performances are currently scheduled."
        : upcoming
            .map((p, i) => `${i + 1}. ${p.date}\n   ${p.venue}\n   Program: ${p.program}`)
            .join("\n\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: { language: lang, count: upcoming.length, performances: upcoming },
    };
  },
});
