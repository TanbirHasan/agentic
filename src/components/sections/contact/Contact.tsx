"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-slate-700/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-700/10 rounded-full blur-xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 mb-6">
            <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">
              Contact Us{" "}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-slate-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Get
            in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            {!isSubmitted ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-indigo-400" />
                  Send us a message
                </h3>

                <div>
                  <label className="flex text-slate-300 mb-2 items-center gap-2 text-sm font-medium">
                    <User className="w-4 h-4" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/50"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="flex text-slate-300 mb-2 items-center gap-2 text-sm font-medium">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/50"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="flex text-slate-300 mb-2 items-center gap-2 text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/50"
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="flex text-slate-300 mb-2 items-center gap-2 text-sm font-medium">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-slate-700 focus:border-indigo-500 focus:ring-indigo-500/50"
                    }`}
                    placeholder="Tell us about your project and how we can help..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-indigo-700 to-blue-800 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold">
                      info@theagentichub.com
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      theagentichub@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-semibold">
                      +1 (516) 951-7773
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-indigo-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-slate-500/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Office</p>
                    <p className="text-white font-semibold">
                      491 Fort Smith Blvd, Deltona, FL 32738
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-700 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">
                      Business Hours
                    </p>
                    <p className="text-white font-semibold">
                      Mon-Fri: 9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
