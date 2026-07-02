"use client";

export default function LeadForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8">

      <h2 className="text-3xl font-bold text-white">
        Book a Site Visit
      </h2>

      <p className="text-gray-300 mt-2 mb-6">
        Get pricing, brochure & exclusive offers.
      </p>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <input
          type="email"
          placeholder="Email (Optional)"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <button
          className="w-full bg-[#C89B3C] py-4 rounded-xl text-black font-semibold hover:bg-[#E6C77B] transition"
        >
          Get Details
        </button>

      </form>

    </div>
  );
}