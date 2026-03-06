import { useState } from "react";
import { submitToFormspree } from "../lib/formspree";

const initialForm = {
  name: "",
  email: "",
  businessType: "",
  automationGoal: "",
};

export function CtaContactSection({ onScheduleClick }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.businessType.trim()) {
      nextErrors.businessType = "Business type is required.";
    }
    if (!formData.automationGoal.trim()) {
      nextErrors.automationGoal = "Please share what you want to automate.";
    }
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitToFormspree({
        formType: "contact",
        name: formData.name,
        email: formData.email,
        businessType: formData.businessType,
        automationGoal: formData.automationGoal,
      });
      setSubmitted(true);
      setFormData(initialForm);
    } catch (error) {
      setSubmitted(false);
      if (error.message === "missing_endpoint") {
        setSubmitError(
          "Form is not configured yet. Add VITE_FORMSPREE_ENDPOINT to enable submissions.",
        );
      } else {
        setSubmitError("Submission failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };

  return (
    <section id="contact" className="scroll-mt-24 section-dark py-20 sm:py-24">
      <div className="aurora-layer" aria-hidden="true" />
      <div className="section-wrap relative z-10">
        <div className="grid gap-10 rounded-3xl bg-[color:rgba(15,23,42,0.88)] p-7 shadow-card sm:p-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get a Free Workflow Review
            </h2>
            <p className="mt-4 max-w-xl text-light-gray">
              Book a free 20-minute call. I&apos;ll review your current process and
              share specific automation opportunities.
            </p>
            <button onClick={onScheduleClick} className="cta-btn mt-6" type="button">
              Schedule a Free Workflow Review
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Send a quick message</h3>
            {submitted && (
              <p
                className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                role="status"
              >
                Thanks. Your message was submitted successfully.
              </p>
            )}
            {submitError && (
              <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {submitError}
              </p>
            )}
            <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-ink outline-none ring-accent focus:ring-2"
                />
                {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-ink outline-none ring-accent focus:ring-2"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-700">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="businessType"
                  className="mb-1 block text-sm font-medium text-white"
                >
                  Business type
                </label>
                <input
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-ink outline-none ring-accent focus:ring-2"
                />
                {errors.businessType && (
                  <p className="mt-1 text-sm text-red-700">{errors.businessType}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="automationGoal"
                  className="mb-1 block text-sm font-medium text-white"
                >
                  What you want to automate
                </label>
                <textarea
                  id="automationGoal"
                  name="automationGoal"
                  value={formData.automationGoal}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-ink outline-none ring-accent focus:ring-2"
                />
                {errors.automationGoal && (
                  <p className="mt-1 text-sm text-red-700">{errors.automationGoal}</p>
                )}
              </div>
              <button
                type="submit"
                className="cta-btn w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
