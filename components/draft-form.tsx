"use client";

import { useId, useState, type FormEvent } from "react";
import type { DraftFormContent, FormField } from "@/lib/content";
import { downloadFormDraft } from "@/lib/download-draft";

type DraftFormProps = {
  form: DraftFormContent;
};

function fieldId(formId: string, name: string) {
  return `${formId}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function Control({
  field,
  formId,
}: {
  field: Exclude<FormField, { kind: "checks" }>;
  formId: string;
}) {
  const id = fieldId(formId, field.name);
  const hintId = field.kind === "textarea" && field.hint ? `${id}-hint` : undefined;

  if (field.kind === "select") {
    return (
      <label htmlFor={id}>
        {field.label}
        <select id={id} name={field.name} required={field.required} defaultValue="">
          <option value="">{field.placeholder}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (field.kind === "textarea") {
    return (
      <label className="span" htmlFor={id}>
        {field.label}
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          maxLength={field.maxLength}
          rows={field.rows ?? 4}
          aria-describedby={hintId}
        />
        {field.hint ? <small id={hintId}>{field.hint}</small> : null}
      </label>
    );
  }

  return (
    <label htmlFor={id}>
      {field.label}
      <input
        id={id}
        type={field.kind}
        name={field.name}
        required={field.required}
        autoComplete={field.autoComplete}
        maxLength={field.maxLength}
        min={field.min}
        max={field.max}
        placeholder={field.placeholder}
      />
    </label>
  );
}

export function DraftForm({ form }: DraftFormProps) {
  const reactId = useId();
  const noteId = `${form.id}-note`;
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const element = event.currentTarget;

    if (!element.checkValidity()) {
      element.reportValidity();
      setStatus("Please complete the highlighted fields.");
      const invalid = element.querySelector<HTMLElement>(":invalid");
      invalid?.focus();
      return;
    }

    downloadFormDraft(element, form.filename);
    setStatus("Draft downloaded. It is saved on this device and has not been sent anywhere.");
  }

  return (
    <form
      id={form.id}
      className="enquiry"
      aria-describedby={noteId}
      onSubmit={onSubmit}
      noValidate={false}
    >
      <p id={noteId} className="form-note">
        {form.note}
      </p>
      {form.fields.map((field) => {
        if (field.kind === "checks") {
          return (
            <fieldset key={field.name} className="duty-checks">
              <legend>{field.legend}</legend>
              <p>{field.hint}</p>
              {field.options.map((option) => {
                const id = `${reactId}-${fieldId(form.id, option)}`;
                return (
                  <label key={option} htmlFor={id}>
                    <input id={id} type="checkbox" name={field.name} value={option} />
                    <span>{option}</span>
                  </label>
                );
              })}
            </fieldset>
          );
        }

        return <Control key={field.name} field={field} formId={form.id} />;
      })}
      <button className="button" type="submit">
        {form.submitLabel}
      </button>
      <p className="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
