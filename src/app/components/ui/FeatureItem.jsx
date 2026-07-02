import { CheckCircle2 } from "lucide-react";

export default function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={22}
        className="text-[#C89B3C] flex-shrink-0"
      />

      <p className="text-gray-300">
        {text}
      </p>

    </div>
  );
}