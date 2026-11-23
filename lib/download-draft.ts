const titles: Record<string, string> = {
  "stalwyn-staffing-enquiry": "Stalwyn Workforce staffing enquiry",
  "stalwyn-candidate-application": "Stalwyn Workforce candidate application",
};

/**
 * Build a plain-text draft from a form and download it on the device.
 * Values are read from the form only — nothing is posted to a server.
 */
export function downloadFormDraft(form: HTMLFormElement, filename: string) {
  const grouped = new Map<string, string[]>();
  const order: string[] = [];

  for (const [label, raw] of new FormData(form).entries()) {
    const value = String(raw).trim();
    if (!value) continue;
    const existing = grouped.get(label);
    if (existing) {
      existing.push(value);
    } else {
      grouped.set(label, [value]);
      order.push(label);
    }
  }

  const title = titles[filename] ?? "Stalwyn Workforce draft";
  const body = order.map((label) => `${label}: ${grouped.get(label)!.join("; ")}`).join("\n\n");
  const text = `${title}\nSaved on this device. This file was not submitted online.\n\n${body}\n`;

  const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.txt`;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
