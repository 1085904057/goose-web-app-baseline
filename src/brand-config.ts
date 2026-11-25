export interface BrandFormDesignConfig {
  readonly brandId: string;
  readonly brandName: string;
  readonly title: string;
  readonly description: string;
}

interface BrandFormDesignEnvironment {
  readonly VITE_BRAND_ID?: string;
  readonly VITE_BRAND_NAME?: string;
  readonly VITE_FORM_TITLE?: string;
  readonly VITE_FORM_DESCRIPTION?: string;
}

function clean(value: string | undefined, fallback: string): string {
  const normalized = value?.trim();
  return normalized ? normalized : fallback;
}

export function createBrandFormDesignConfig(
  environment: BrandFormDesignEnvironment,
): BrandFormDesignConfig {
  const brandName = clean(environment.VITE_BRAND_NAME, "Goose");

  return {
    brandId: clean(environment.VITE_BRAND_ID, "goose"),
    brandName,
    title: clean(environment.VITE_FORM_TITLE, `${brandName} product inquiry`),
    description: clean(
      environment.VITE_FORM_DESCRIPTION,
      "Tell us what you want to build. This Form Design is generated from the Goose web app baseline.",
    ),
  };
}

export function createActiveBrandFormDesignConfig(): BrandFormDesignConfig {
  return createBrandFormDesignConfig(import.meta.env);
}
