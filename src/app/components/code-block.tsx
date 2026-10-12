"use client";

import { useState } from "react";

export function CodeBlock({ language, code, note }: { language: string; code: string; note?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs text-white/50">{language}</span>
        <button
          onClick={copy}
          className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/70 transition hover:border-teal-200/40 hover:text-teal-200"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-6 text-teal-100/90">{code}</code>
      </pre>
      {note ? <p className="border-t border-white/10 px-4 py-2 text-xs text-white/45">{note}</p> : null}
    </div>
  );
}
