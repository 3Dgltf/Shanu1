import { useState, FormEvent } from "react";
import { X, Sparkles, Phone, CheckCircle2, AlertCircle, RefreshCw, Send } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";
import { saveEnquiry } from "@/services/apiStore";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string; // 'bridal' | 'pricing' | 'general'
}

export default function EnquiryModal({ isOpen, onClose, serviceType }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const title =
    serviceType === "bridal"
      ? "Bridal & Occasion Makeup Enquiry"
      : serviceType === "pricing"
      ? "Package & Pricing Request"
      : "General Salon Enquiry";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      saveEnquiry({
        name,
        phone,
        serviceType,
        message: message || `${title} submitted from website modal.`,
      });

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Could not submit enquiry. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white max-w-lg w-full rounded-2xl border border-[#E5D5C3] shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#1C1917] text-white p-5 flex items-center justify-between border-b border-[#C5A059]/40">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#FAF6F0]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="space-y-4 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h4 className="font-serif-luxury text-2xl font-bold text-[#1C1917]">
                Enquiry Received!
              </h4>

              <p className="text-xs text-[#44403C] leading-relaxed">
                Thank you <strong className="text-[#1C1917]">{name}</strong>. Our salon team will contact you shortly regarding package pricing and date availability.
              </p>

              <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/40 text-xs space-y-2">
                <p className="font-bold text-[#1C1917]">Need instant assistance?</p>
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#C5A059] rounded-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </div>

              <button
                onClick={handleReset}
                className="mt-2 text-xs text-[#C5A059] underline font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#44403C]">
                Please enter your details below. We will provide package custom estimates and answer any queries.
              </p>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-md border border-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1C1917]">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1C1917]">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 93593 11298"
                  className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#1C1917]">Event / Requirements Note</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention your event date, family member count, or specific package query..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] rounded-md shadow flex items-center gap-2"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
