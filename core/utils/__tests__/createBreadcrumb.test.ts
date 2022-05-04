import BreadcrumbItem from "core/types/BreadcrumbItem.type";
import createBreadcrumb from "core/utils/createBreadcrumb";

describe("createBreadcrumb", () => {
  it("Generates valid breadcrumb for empty string.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
    ];
    const actual = createBreadcrumb("");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
    ];
    const actual = createBreadcrumb("/");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
    ];
    const actual = createBreadcrumb("/#24124");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
    ];
    const actual = createBreadcrumb("/#");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Use",
        url: "/use",
      },
    ];
    const actual = createBreadcrumb("/use#234");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Use",
        url: "/use",
      },
    ];
    const actual = createBreadcrumb("/use");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });

  it("Generates valid breadcrumb for root path.", () => {
    const expected: BreadcrumbItem[] = [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Block",
        url: "/block",
      },
      {
        name: "Sdasd-24245-245",
        url: "/block/sdasd-24245-245",
      },
    ];
    const actual = createBreadcrumb("/block/sdasd-24245-245");
    expect(actual).toStrictEqual<BreadcrumbItem[]>(expected);
  });
});
