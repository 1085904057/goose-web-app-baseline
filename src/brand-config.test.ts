import { describe, expect, it } from "vitest";

import { createBrandFormDesignConfig } from "./brand-config";

describe("createBrandFormDesignConfig", () => {
  it("uses the template defaults when brand values are absent", () => {
    expect(createBrandFormDesignConfig({})).toEqual({
      brandId: "goose",
      brandName: "Goose",
      title: "Goose product inquiry",
      description:
        "Tell us what you want to build. This Form Design is generated from the Goose web app baseline.",
    });
  });

  it("uses trusted Brand values supplied by the Sandbox environment", () => {
    expect(
      createBrandFormDesignConfig({
        VITE_BRAND_ID: "acme",
        VITE_BRAND_NAME: "Acme Studio",
        VITE_FORM_TITLE: "Start an Acme project",
        VITE_FORM_DESCRIPTION: "Share the brief for your next launch.",
      }),
    ).toEqual({
      brandId: "acme",
      brandName: "Acme Studio",
      title: "Start an Acme project",
      description: "Share the brief for your next launch.",
    });
  });
});
