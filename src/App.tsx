import type { FormEvent } from "react";
import { useState } from "react";

import { createActiveBrandFormDesignConfig } from "./brand-config";

const design = createActiveBrandFormDesignConfig();

export function App() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="page-shell">
      <section className="brand-intro">
        <div className="brand-mark" aria-hidden="true">
          {design.brandName.slice(0, 1).toUpperCase()}
        </div>
        <p className="eyebrow">Form Design template</p>
        <h1>{design.title}</h1>
        <p className="intro-copy">{design.description}</p>
        <dl className="brand-meta">
          <div>
            <dt>Brand</dt>
            <dd>{design.brandName}</dd>
          </div>
          <div>
            <dt>Design source</dt>
            <dd>goose-web-app-baseline</dd>
          </div>
        </dl>
      </section>

      <section className="form-card">
        {submitted ? (
          <div className="success-state" role="status">
            <span className="success-state__icon" aria-hidden="true">
              ✓
            </span>
            <p className="eyebrow">Preview interaction complete</p>
            <h2>Your brief is ready.</h2>
            <p>
              This confirmation is rendered by the baseline application running
              from the Sandbox Preview server.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-heading">
              <p className="eyebrow">Start a conversation</p>
              <h2>Share your project brief</h2>
              <p>
                The form fields come from the design template. Brand identity is
                applied at runtime.
              </p>
            </div>

            <label>
              <span>Full name</span>
              <input name="name" autoComplete="name" placeholder="Robin Wang" />
            </label>
            <label>
              <span>Work email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="robin@example.com"
              />
            </label>
            <label>
              <span>What would you like to create?</span>
              <textarea
                name="brief"
                rows={4}
                placeholder="Describe the experience, audience, and desired outcome."
              />
            </label>

            <button type="submit">Create with {design.brandName}</button>
          </form>
        )}
      </section>
    </main>
  );
}
