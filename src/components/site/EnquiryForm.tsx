import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";

export function EnquiryForm({
  submitLabel = "Send Enquiry",
  extra,
}: {
  submitLabel?: string;
  extra?: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch shortly.");
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="City" name="city" />
      </div>
      {extra}
      <div>
        <label className="eyebrow mb-2 block">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow mb-2 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
