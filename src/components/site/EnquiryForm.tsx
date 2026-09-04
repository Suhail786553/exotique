import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { submitContact } from "@/lib/api";

const CORE_FIELDS = ["name", "phone", "email", "city", "message"];

export function EnquiryForm({
  submitLabel = "Send Enquiry",
  source = "general",
  extra,
}: {
  submitLabel?: string;
  source?: string;
  extra?: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const name = String(formData.get("name") ?? "");
      const phone = String(formData.get("phone") ?? "");
      const email = String(formData.get("email") ?? "");
      const city = String(formData.get("city") ?? "");
      const message = String(formData.get("message") ?? "");

      const extraData: Record<string, string> = {};
      formData.forEach((value, key) => {
        if (!CORE_FIELDS.includes(key) && typeof value === "string") {
          extraData[key] = value;
        }
      });

      await submitContact({
        name,
        phone,
        email,
        city,
        message,
        source,
        extra: extraData,
      });

      form.reset();
      toast.success("Thanks — we'll be in touch shortly.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
