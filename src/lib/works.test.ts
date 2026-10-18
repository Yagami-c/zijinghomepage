import { describe, expect, it } from "vitest";
import { filterWorks, findWork, splitPerformances, works } from "./works";
import { performances } from "./site-data";

describe("portfolio rules", () => {
  it("treats every listed concert as past on October 17, 2026", () => {
    const groups = splitPerformances(performances, new Date("2026-10-17T08:47:00Z"));
    expect(groups.upcoming).toHaveLength(0);
    expect(groups.past[0].isoDate).toBe("2026-03-28T14:00:00+03:00");
  });

  it("shows a concert on March 1, 2026 only as upcoming", () => {
    const groups = splitPerformances(performances, new Date("2026-03-01T00:00:00+03:00"));
    expect(groups.upcoming.map((p) => p.isoDate)).toEqual(["2026-03-28T14:00:00+03:00"]);
  });

  it("places a work with missing composer under unknown", () => {
    expect(filterWorks(works, { composer: "unknown", period: "all", form: "all" }).map((w) => w.slug)).toEqual(["moscow-conservatory-state-exam"]);
  });

  it("opens the Chopin work for its route", () => {
    expect(findWork("chopin-etude-op10-no12")?.videoId).toBe("ySZBNtqPF0I");
  });
});