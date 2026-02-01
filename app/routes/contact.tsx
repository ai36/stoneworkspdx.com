import type { MetaFunction } from "react-router";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Clock,
  CheckCircle,
  Upload,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useAppDispatch, useAppSelector } from "@/../app/hooks";
import { store } from "@/../app/store";
import {
  updateField,
  validateForm,
  submitLeadForm,
  resetForm,
  type ValidationErrors,
} from "@/features/leadForm/leadFormSlice";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const whatHappensNext = [
  {
    title: "We Review Your Request",
    description:
      "Within 24 hours, we review your project details and prepare for your estimate.",
  },
  {
    title: "We Schedule a Visit",
    description:
      "We'll contact you to schedule a convenient time to visit your property.",
  },
  {
    title: "You Get a Detailed Quote",
    description:
      "Receive a clear, itemized quote with no hidden fees or surprises.",
  },
];

export const meta: MetaFunction = () => {
  const title = "Get a Free Estimate";
  const description =
    "Request a free, no-obligation estimate for your stone or brick project. Stone veneer contractor Portland OR, brick masonry Vancouver WA.";
  const canonical = "/contact";

  return [
    { title },
    { name: "description", content: description },

    { tagName: "link", rel: "canonical", href: canonical },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
};

export default function ContactRoute() {
  const dispatch = useAppDispatch();
  const { formData, validationErrors, submitStatus, responseMessage } =
    useAppSelector((state) => state.leadForm);

  const [photoNames, setPhotoNames] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 1) Запускаем валидацию
    dispatch(validateForm());

    // 2) Читаем АКТУАЛЬНЫЕ ошибки из store (а не из замыкания)
    //    Это убирает "гонки" и делает submit предсказуемым.
    const state = store.getState() as { leadForm: { validationErrors: ValidationErrors } };
    const errors = state.leadForm?.validationErrors
      ? Object.keys(state.leadForm.validationErrors)
      : [];

    if (errors.length === 0) {
      dispatch(submitLeadForm(formData));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setPhotoNames(fileArray.map((f) => f.name));
      dispatch(updateField({ field: "photos", value: fileArray }));
    }
  };

  // Success state
  if (submitStatus === "success") {
    return (
      <section className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="container max-w-lg text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
            Request Received!
          </h1>
          <p className="text-muted-foreground mb-8">{responseMessage}</p>
          <Button
            onClick={() => {
              setPhotoNames([]);
              dispatch(resetForm());
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll schedule a free on-site
              consultation. No pressure, no obligation — just honest advice and
              a clear quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot - Hidden from users, visible to bots */}
                <div className="hidden" aria-hidden="true">
                  <Input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) =>
                      dispatch(
                        updateField({ field: "honeypot", value: e.target.value })
                      )
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        dispatch(
                          updateField({
                            field: "fullName",
                            value: e.target.value,
                          })
                        )
                      }
                      className={cn(
                        validationErrors.fullName && "border-destructive"
                      )}
                      placeholder="John Smith"
                    />
                    {validationErrors.fullName && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        dispatch(
                          updateField({ field: "phone", value: e.target.value })
                        )
                      }
                      className={cn(
                        validationErrors.phone && "border-destructive"
                      )}
                      placeholder="(503) 555-0123"
                    />
                    {validationErrors.phone && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & City/ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        dispatch(
                          updateField({ field: "email", value: e.target.value })
                        )
                      }
                      className={cn(
                        validationErrors.email && "border-destructive"
                      )}
                      placeholder="john@example.com"
                    />
                    {validationErrors.email && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="cityZip">City or ZIP Code *</Label>
                    <Input
                      id="cityZip"
                      type="text"
                      value={formData.cityZip}
                      onChange={(e) =>
                        dispatch(
                          updateField({
                            field: "cityZip",
                            value: e.target.value,
                          })
                        )
                      }
                      className={cn(
                        validationErrors.cityZip && "border-destructive"
                      )}
                      placeholder="Portland, OR or 97201"
                    />
                    {validationErrors.cityZip && (
                      <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.cityZip}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) =>
                      dispatch(updateField({ field: "serviceType", value }))
                    }
                  >
                    <SelectTrigger
                      className={cn(
                        validationErrors.serviceType && "border-destructive"
                      )}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.serviceType && (
                    <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.serviceType}
                    </p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <Label htmlFor="projectDescription">
                    Project Description *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) =>
                      dispatch(
                        updateField({
                          field: "projectDescription",
                          value: e.target.value,
                        })
                      )
                    }
                    className={cn(
                      "min-h-[120px]",
                      validationErrors.projectDescription && "border-destructive"
                    )}
                    placeholder="Tell us about your project. What are you looking to build or repair? Any specific materials or style preferences?"
                  />
                  {validationErrors.projectDescription && (
                    <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.projectDescription}
                    </p>
                  )}
                </div>

                {/* Photo Upload */}
                <div>
                  <Label htmlFor="photos">Upload Photos (Optional)</Label>
                  <div className="mt-1">
                    <label
                      htmlFor="photos"
                      className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <Upload className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {photoNames.length > 0
                          ? `${photoNames.length} file(s) selected`
                          : "Click to upload photos of your project"}
                      </span>
                    </label>
                    <input
                      id="photos"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  {photoNames.length > 0 && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      {photoNames.join(", ")}
                    </div>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <Label>Preferred Contact Method</Label>
                  <div className="flex gap-4 mt-2">
                    {(["call", "text", "email"] as const).map((method) => (
                      <label
                        key={method}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer transition-colors",
                          formData.preferredContact === method
                            ? "border-primary bg-primary-light"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            dispatch(
                              updateField({
                                field: "preferredContact",
                                value: e.target.value,
                              })
                            )
                          }
                          className="sr-only"
                        />
                        <span className="capitalize font-medium text-sm">
                          {method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-destructive/10 border border-destructive rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-destructive">{responseMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request a Free Estimate"
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* What Happens Next */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {whatHappensNext.map((step, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Reach us
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:info@stoneworkspdx.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-medium">info@stoneworkspdx.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="text-sm">
                      <p>Mon–Fri: 7:00 AM – 5:00 PM</p>
                      <p>Sat: 9:00 AM – 2:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
