import { CheckCircle2 } from "lucide-react";

export default function DifferentiationItem({ text }) {
  return (
    <div className="flex items-start gap-4">

      <div className="mt-1">
        <CheckCircle2
          size={22}
          className="text-[#C89B3C]"
        />
      </div>

      <p className="text-gray-300 leading-7">
        {text}
      </p>

    </div>
  );
}