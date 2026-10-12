"use client";

import { useMemo, useState } from "react";
import type { CategoryMeta } from "@/lib/categories";

const inputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50";

export function SubmitForm({ categories }: { categories: CategoryMeta[] }) {
  const [name, setName] = useState("");
  const [homepage, setHomepage] = useState("");
  const [category, setCategory] = useState<string>(categories[0]?.slug ?? "");
  const [submitter, setSubmitter] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState(false);

  const issueUrl = useMemo(() => {
    const title = `Suggested API: ${name || "<name>"}`;
    const body = [
      `API name: ${name}`,
      `Provider URL: ${homepage}`,
      `Category: ${category}`,
      submitter ? `Suggested by: ${submitter}` : "",
      email ? `Contact: ${email}` : "",
      "",
      description,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://github.com/MingweiC06/APIbeta/issues/new?title=${encodeURIComponent(
      title,
    )}&body=${encodeURIComponent(body)}`;
  }, [name, homepage, category, submitter, email, description]);

  const mailtoUrl = useMemo(() => {
    const subject = `APIbeta suggestion: ${name || "an API"}`;
    const body = [
      `API name: ${name}`,
      `Provider URL: ${homepage}`,
      `Category: ${category}`,
      `Your name: ${submitter}`,
      `Email: ${email}`,
      "",
      description,
    ].join("\n");
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, homepage, category, submitter, email, description]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "API name is required.";
    if (!homepage.trim()) {
      next.homepage = "Provider URL is required.";
    } else if (!/^https?:\/\/.+\..+/.test(homepage.trim())) {
      next.homepage = "Enter a valid URL starting with http:// or https://";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "That email address looks invalid.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setPrepared(true);
    }
  }

  if (prepared) {
    return (
      <div className="glass-card rounded-xl p-8">
        <p className="text-2xl font-semibold text-teal-200">Suggestion prepared</p>
        <p className="mt-3 leading-7 text-white/65">
          Thanks — we&rsquo;ve assembled your suggestion for <strong className="text-white">{name}</strong>.
          The MVP has no backend wired up, so nothing was stored or emailed yet. To get it into
          the catalog, open a GitHub issue with the draft pre-filled:
        </p>
        <a
          href={issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
        >
          Open pre-filled GitHub issue ↗
        </a>
        <p className="mt-6 text-sm text-white/45">
          No GitHub account? Use the mailto fallback instead:{" "}
          <a href={mailtoUrl} className="text-teal-200 underline underline-offset-2">
            open your email app
          </a>
          . Suggestions are reviewed against official docs before being published.
        </p>
        <button
          onClick={() => setPrepared(false)}
          className="mt-6 text-sm text-white/50 underline underline-offset-2 transition hover:text-white"
        >
          Edit the suggestion
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-xl p-6 sm:p-8" noValidate>
      <label className="block text-sm font-medium text-white/72" htmlFor="api-name">
        API name <span className="text-teal-200">*</span>
      </label>
      <input
        id="api-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. OpenWeatherMap"
        className={inputClass}
      />
      {errors.name ? <p className="mt-1 text-xs text-rose-300">{errors.name}</p> : null}

      <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="api-url">
        Provider URL <span className="text-teal-200">*</span>
      </label>
      <input
        id="api-url"
        value={homepage}
        onChange={(e) => setHomepage(e.target.value)}
        placeholder="https://example.com"
        inputMode="url"
        className={inputClass}
      />
      {errors.homepage ? (
        <p className="mt-1 text-xs text-rose-300">{errors.homepage}</p>
      ) : null}

      <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="api-category">
        Category
      </label>
      <select
        id="api-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={inputClass}
      >
        {categories.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.label}
          </option>
        ))}
      </select>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-white/72" htmlFor="your-name">
            Your name <span className="text-white/35">(optional)</span>
          </label>
          <input
            id="your-name"
            value={submitter}
            onChange={(e) => setSubmitter(e.target.value)}
            placeholder="How should we credit you?"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/72" htmlFor="your-email">
            Email <span className="text-white/35">(optional)</span>
          </label>
          <input
            id="your-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
          {errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email}</p> : null}
        </div>
      </div>

      <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="api-notes">
        Short description
      </label>
      <textarea
        id="api-notes"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What does this API do, and why should we add it?"
        className={`${inputClass} min-h-28 resize-none`}
      />

      <button
        type="submit"
        className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
      >
        Prepare suggestion
      </button>
      <p className="mt-3 text-xs text-white/35">
        Nothing is sent yet — you&rsquo;ll get a reviewable draft you can submit as a GitHub issue.
      </p>
    </form>
  );
}
