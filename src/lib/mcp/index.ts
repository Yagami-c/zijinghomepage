import { defineMcp } from "@lovable.dev/mcp-js";
import getBiography from "./tools/get-biography";
import listUpcomingPerformances from "./tools/list-upcoming-performances";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "zijing-zeng-mcp",
  title: "Zijing Zeng — Pianist MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for classical pianist Zijing Zeng (曾子荆 / Цзыцзин Цзэн). Use `get_biography` for her background, `list_upcoming_performances` for concert schedule, and `get_contact_info` for booking/contact info. All tools support English ('en'), Russian ('ru'), and Chinese ('zh') via the optional `language` parameter.",
  tools: [getBiography, listUpcomingPerformances, getContactInfo],
});
