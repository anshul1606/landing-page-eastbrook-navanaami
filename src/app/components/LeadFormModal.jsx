"use client";
import { AnimatePresence, motion } from "framer-motion";
import LeadForm from "./LeadForm";
import { X } from "lucide-react";


export default function LeadFormModal({open, onClose}){
    return(
    <AnimatePresence>
        {open && (
            <motion.div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <motion.div
                initial={{scale: 0.9, y:40}}
                animate={{scale: 1, y: 0}}
                exit={{scale: 0.9, y:40}}
                transition={{duration: 0.5}} 
                className="relative">
                    <button onClick={onClose}
                    className="absolute -top-3 -right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-[#C89B3C]">
                        <X size={15} />
                    </button>
                    <LeadForm />

                </motion.div>

            </motion.div>

        )}
        
    </AnimatePresence>
    );
}