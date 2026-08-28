import { useState, useEffect } from "react";
import { X, RefreshCw, Calendar, Phone, Search, ClipboardList, CheckCircle2 } from "lucide-react";
import { Appointment, Enquiry, getAppointments, getEnquiries } from "@/services/apiStore";

interface StaffAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StaffAppointmentsModal({ isOpen, onClose }: StaffAppointmentsModalProps) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [activeTab, setActiveTab] = useState<"appointments" | "enquiries">("appointments");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    setLoading(true);
    try {
      setAppointments(getAppointments());
      setEnquiries(getEnquiries());
    } catch (e) {
      console.error("Failed to load staff records:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredAppts = appointments.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.phone.includes(search) ||
    a.referenceNo.toLowerCase().includes(search.toLowerCase()) ||
    a.service.toLowerCase().includes(search.toLowerCase())
  );

  const filteredEnqs = enquiries.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.phone.includes(search) ||
    e.serviceType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white max-w-3xl w-full rounded-2xl border border-[#E5D5C3] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-[#1C1917] text-white p-5 flex items-center justify-between border-b border-[#C5A059]/40 shrink-0">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#FAF6F0]">
                Loreat Salon Staff Portal
              </h3>
              <p className="text-[11px] text-stone-300">Appointment requests & enquiries database</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
              title="Refresh records"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#C5A059]" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs & Search */}
        <div className="p-4 bg-[#FAF6F0] border-b border-[#E5D5C3] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("appointments")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "appointments"
                  ? "bg-[#C5A059] text-white shadow-xs"
                  : "bg-white text-[#44403C] border border-[#E5D5C3]"
              }`}
            >
              Appointments ({appointments.length})
            </button>
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "enquiries"
                  ? "bg-[#C5A059] text-white shadow-xs"
                  : "bg-white text-[#44403C] border border-[#E5D5C3]"
              }`}
            >
              Quick Enquiries ({enquiries.length})
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone or ref..."
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#E5D5C3] rounded-md text-xs text-[#1C1917] focus:outline-none"
            />
          </div>
        </div>

        {/* List Content */}
        <div className="p-4 overflow-y-auto space-y-3 grow">
          {loading ? (
            <div className="text-center py-12 text-stone-400 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#C5A059]" /> Loading database records...
            </div>
          ) : activeTab === "appointments" ? (
            filteredAppts.length > 0 ? (
              filteredAppts.map((appt) => (
                <div
                  key={appt.id}
                  className="bg-white p-4 rounded-xl border border-[#E5D5C3] shadow-xs space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="font-mono font-bold text-[#C5A059]">{appt.referenceNo}</span>
                    <span className="text-[10px] bg-[#F4ECE1] text-[#C5A059] px-2 py-0.5 rounded font-semibold uppercase">
                      {appt.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[#1C1917]">
                    <div>
                      <span className="text-stone-400 text-[10px] block">Customer</span>
                      <span className="font-bold">{appt.name}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 text-[10px] block">Phone</span>
                      <a href={`tel:${appt.phone}`} className="font-bold text-[#C5A059] hover:underline flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {appt.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-400 text-[10px] block">Service</span>
                      <span className="font-semibold">{appt.service}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 text-[10px] block">Date & Time</span>
                      <span className="font-semibold">{appt.preferredDate} @ {appt.preferredTime}</span>
                    </div>
                  </div>

                  {appt.occasion && (
                    <p className="text-[11px] text-stone-600 bg-[#FAF6F0] p-2 rounded">
                      <strong className="text-[#1C1917]">Occasion:</strong> {appt.occasion}
                    </p>
                  )}

                  {appt.message && (
                    <p className="text-[11px] text-stone-600 italic">
                      &ldquo;{appt.message}&rdquo;
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-10 text-xs text-stone-400">No appointment records found.</p>
            )
          ) : (
            filteredEnqs.length > 0 ? (
              filteredEnqs.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-white p-4 rounded-xl border border-[#E5D5C3] shadow-xs space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <span className="font-bold text-[#1C1917]">{enq.name}</span>
                    <span className="text-[10px] uppercase font-bold text-[#C5A059] bg-[#F4ECE1] px-2 py-0.5 rounded">
                      {enq.serviceType}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#1C1917]">
                    <a href={`tel:${enq.phone}`} className="font-bold text-[#C5A059] hover:underline flex items-center gap-1">
                      <Phone className="w-3 h-3" /> {enq.phone}
                    </a>
                    <span className="text-[10px] text-stone-400">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {enq.message && (
                    <p className="text-[11px] text-stone-600 italic bg-[#FAF6F0] p-2 rounded">
                      &ldquo;{enq.message}&rdquo;
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-10 text-xs text-stone-400">No enquiry records found.</p>
            )
          )}
        </div>

      </div>
    </div>
  );
}
