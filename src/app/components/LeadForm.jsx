"use client";
import { useState } from "react";
export default function LeadForm({isOpen = true,
  onClose,
}){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name.trim()){
      alert("Please enter your name.");
      return;
    }
    if(!/^[0-9]{10}$/.test(phone)){
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try{
    await fetch("https://script.google.com/macros/s/AKfycbyEEe_0BQY8RU1k8caozLx8oUiNJOfmVri7w1rJRV7ievK_K31ul55RXN_2tRdejW3kOg/exec", {
      method: "POST",
      mode: "cors",
      headers: {
            "Content-Type": "text/plain",
          },
      body: JSON.stringify({name, phone, email}),
    });
     
        alert("Thank you! Our team will contact you shortly.");

        setName("");
        setPhone("");
        setEmail(""); 
    }
     catch (error) {
      console.error(error);
      alert("Network Error! Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };
   
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8">

      <h2 className="text-3xl font-bold text-white">
        Book a Site Visit
      </h2>

      <p className="text-gray-300 mt-2 mb-6">
        Get pricing, brochure & exclusive offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <input
          type="tel"
          value={phone}
          onChange = {(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (Optional)"
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-4 outline-none text-white"
        />

        <button type = "submit" disabled={loading}
          className="w-full bg-[#C89B3C] py-4 rounded-xl text-black font-semibold hover:bg-[#E6C77B] transition"
        >
          {loading ? "Submitting..." : "Get Details"}
        </button>

      </form>

    </div>
  );
}