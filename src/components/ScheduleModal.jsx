import { useEffect, useState } from "react";

const initialState = { email: "", preferredTimes: "" };

export function ScheduleModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setError("");
      setSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }
    if (!formData.preferredTimes.trim()) {
      setError("Please add a preferred time window.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setFormData(initialState);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4">
      <div className="card w-full max-w-lg p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold text-ink">Schedule a Free Workflow Review</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border px-3 py-1 text-sm text-slate hover:bg-slate/10"
            aria-label="Close schedule modal"
          >
            Close
          </button>
        </div>
        <p className="text-sm text-slate">
          Share your email and preferred times. You&apos;ll get a scheduling reply
          to confirm a free 20-minute review.
        </p>
        {success && (
          <p
            className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
            role="status"
          >
            Request received. You&apos;ll be contacted shortly.
          </p>
        )}
        {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
        <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="schedule-email" className="mb-1 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="schedule-email"
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, email: event.target.value }))
              }
              className="w-full rounded-xl border border-border px-4 py-2.5 outline-none ring-accent focus:ring-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="schedule-times"
              className="mb-1 block text-sm font-medium text-ink"
            >
              Preferred times
            </label>
            <textarea
              id="schedule-times"
              value={formData.preferredTimes}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  preferredTimes: event.target.value,
                }))
              }
              rows={3}
              placeholder="Example: Tue/Thu afternoons (CT)"
              className="w-full rounded-xl border border-border px-4 py-2.5 outline-none ring-accent focus:ring-2"
              required
            />
          </div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="cta-btn">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
