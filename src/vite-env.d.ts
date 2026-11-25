/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRAND_ID?: string;
  readonly VITE_BRAND_NAME?: string;
  readonly VITE_FORM_TITLE?: string;
  readonly VITE_FORM_DESCRIPTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
