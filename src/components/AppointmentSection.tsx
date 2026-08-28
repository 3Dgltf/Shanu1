import { useState, FormEvent } from "react";
import { Calendar, Clock, Phone, Sparkles, CheckCircle2, User, PhoneCall, AlertCircle, RefreshCw } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";
import { saveAppointment } from "@/services/apiStore";

interface AppointmentSectionProps {
  prefilledService?: string;
}

export default function AppointmentSection({ prefilledService = "" }: AppointmentSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefilledService || "Bridal Makeup");
  const [prevPrefilled, setPrevPrefilled] = useState(prefilledService);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("11:00 AM");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  if (prefilledService !== prevPrefilled) {
    setPrevPrefilled(prefilledService);
    if (prefilledService) {
      setService(prefilledService);
    }
  }

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const created = saveAppointment({
        name,
        phone,
        service,
        preferredDate,
        preferredTime,
        occasion,
        message,
      });

      setBookingSuccess(created);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit booking. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setBookingSuccess(null);
    setName("");
    setPhone("");
    setOccasion("");
    setMessage("");
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-[#FAF6F0] relative border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Easy Online Reservation</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
              Book Your Salon Experience
            </h2>

            <p className="text-base text-[#44403C] leading-relaxed">
              Schedule your hair care, facial, makeup, or bridal consultation with Loreat Beauty Parlour in Meerut.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5D5C3]">
                <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#1C1917] block">Daily Business Hours</span>
                  <span className="text-[#44403C]">10:00 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5D5C3]">
                <PhoneCall className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#1C1917] block">Immediate Confirmation</span>
                  <span className="text-[#44403C]">Call +91 93593 11298 after booking for fast slot lock.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form / Success Receipt */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5D5C3] shadow-xl relative">
              
              {bookingSuccess ? (
                /* Success Receipt Card */
                <div className="space-y-6 animate-fade-in text-center sm:text-left">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto sm:mx-0">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                      Request Submitted
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917]">
                      Thank You, {bookingSuccess.name}!
                    </h3>
                    <p className="text-xs text-[#44403C]">
                      Your appointment request has been logged successfully.
                    </p>
                  </div>

                  {/* Reference Ticket Card */}
                  <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-xl border border-[#C5A059]/40 space-y-3 text-xs text-left">
                    <div className="flex items-center justify-between border-b border-[#E5D5C3] pb-2">
                      <span className="text-stone-500">Booking Reference</span>
                      <span className="font-mono font-bold text-[#C5A059] text-sm">{bookingSuccess.referenceNo}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[#1C1917]">
                      <div>
                        <span className="text-stone-500 block text-[11px]">Service</span>
                        <span className="font-semibold">{bookingSuccess.service}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block text-[11px]">Phone</span>
                        <span className="font-semibold">{bookingSuccess.phone}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block text-[11px]">Date</span>
                        <span className="font-semibold">{bookingSuccess.preferredDate}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 block text-[11px]">Preferred Time</span>
                        <span className="font-semibold">{bookingSuccess.preferredTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Call Salon Alert */}
                  <div className="p-4 rounded-xl bg-[#1C1917] text-[#FAF6F0] space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      <span className="text-xs font-bold text-[#E5D5C3]">Next Step for Instant Slot Confirmation:</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Please call our salon directly at <strong className="text-white">{BUSINESS_DETAILS.phoneDisplay}</strong> with your reference number <strong className="text-[#C5A059] font-mono">{bookingSuccess.referenceNo}</strong> to confirm your slot time.
                    </p>
                    <a
                      href={BUSINESS_DETAILS.phoneTel}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#1C1917] bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-all text-center"
                    >
                      <Phone className="w-4 h-4" />
                      Call Salon Now (+91 93593 11298)
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#44403C] hover:text-[#C5A059] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Book Another Appointment
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#E5D5C3] pb-4 mb-4">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1917]">
                      Request an Appointment
                    </h3>
                    <p className="text-xs text-[#44403C] mt-1">
                      Fill in your preferred date and service details below.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-md border border-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1C1917]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#1C1917]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 93593 11298"
                        className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Service */}
                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-semibold text-[#1C1917]">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                      >
                        <option value="Bridal Makeup">Bridal Makeup</option>
                        <option value="Engagement Makeup">Engagement Makeup</option>
                        <option value="Party Makeup">Party Makeup</option>
                        <option value="Hair Services">Hair Services & Spa</option>
                        <option value="Facial / Skincare">Facial / Skincare</option>
                        <option value="Manicure / Pedicure">Manicure / Pedicure</option>
                        <option value="Beauty / Grooming">Beauty / Grooming</option>
                        <option value="Other">Other Custom Service</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-semibold text-[#1C1917]">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-semibold text-[#1C1917]">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                      >
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1C1917]">
                      Occasion (Optional)
                    </label>
                    <input
                      type="text"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      placeholder="e.g. Wedding, Ring Ceremony, Sangeet, Birthday"
                      className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#1C1917]">
                      Specific Requirements / Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us any skin preferences, family member count, or style requests..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF6F0] border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] hover:to-[#866627] rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin" /> Submitting Request...
                      </span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Request Appointment</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-stone-400">
                    Appointments subject to availability confirmation by salon staff.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
