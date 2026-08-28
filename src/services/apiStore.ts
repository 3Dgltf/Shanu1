export interface Appointment {
  id: number;
  referenceNo: string;
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  occasion: string | null;
  message: string | null;
  status: string;
  createdAt: string;
}

export interface Enquiry {
  id: number;
  name: string;
  phone: string;
  serviceType: string;
  message: string | null;
  createdAt: string;
}

const APPOINTMENTS_KEY = "loreat_appointments_v1";
const ENQUIRIES_KEY = "loreat_enquiries_v1";

const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 1,
    referenceNo: "LOR-260828-DEMO",
    name: "Pooja Sharma",
    phone: "+91 98765 43210",
    service: "Bridal Makeup & Styling",
    preferredDate: "2026-09-15",
    preferredTime: "10:30 AM",
    occasion: "Wedding Reception",
    message: "Looking for HD airbrush bridal package with hairstyle.",
    status: "confirmed",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    referenceNo: "LOR-260828-GOLD",
    name: "Ananya Verma",
    phone: "+91 98123 45678",
    service: "Gold Glow Facial & Hair Spa",
    preferredDate: "2026-08-30",
    preferredTime: "02:00 PM",
    occasion: "Festival Preparation",
    message: "Skin brightening facial and deep conditioning.",
    status: "pending",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 1,
    name: "Ritu Kapoor",
    phone: "+91 97112 23344",
    serviceType: "Bridal Packages",
    message: "Need price details for engagement and wedding day makeup for bride + 2 bridesmaids.",
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
];

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return INITIAL_APPOINTMENTS;
  try {
    const data = localStorage.getItem(APPOINTMENTS_KEY);
    if (!data) {
      localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(INITIAL_APPOINTMENTS));
      return INITIAL_APPOINTMENTS;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_APPOINTMENTS;
  }
}

export function saveAppointment(payload: {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  occasion?: string;
  message?: string;
}): Appointment {
  const current = getAppointments();
  const dateCode = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
  const referenceNo = `LOR-${dateCode}-${randomCode}`;

  const newAppointment: Appointment = {
    id: Date.now(),
    referenceNo,
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    service: payload.service.trim(),
    preferredDate: payload.preferredDate.trim(),
    preferredTime: payload.preferredTime.trim(),
    occasion: payload.occasion ? payload.occasion.trim() : null,
    message: payload.message ? payload.message.trim() : null,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  const updated = [newAppointment, ...current];
  try {
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
  return newAppointment;
}

export function getEnquiries(): Enquiry[] {
  if (typeof window === "undefined") return INITIAL_ENQUIRIES;
  try {
    const data = localStorage.getItem(ENQUIRIES_KEY);
    if (!data) {
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(INITIAL_ENQUIRIES));
      return INITIAL_ENQUIRIES;
    }
    return JSON.parse(data);
  } catch {
    return INITIAL_ENQUIRIES;
  }
}

export function saveEnquiry(payload: {
  name: string;
  phone: string;
  serviceType: string;
  message?: string;
}): Enquiry {
  const current = getEnquiries();
  const newEnquiry: Enquiry = {
    id: Date.now(),
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    serviceType: payload.serviceType ? payload.serviceType.trim() : "general",
    message: payload.message ? payload.message.trim() : null,
    createdAt: new Date().toISOString(),
  };

  const updated = [newEnquiry, ...current];
  try {
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn("LocalStorage save error:", e);
  }
  return newEnquiry;
}
