import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import cvAsset from "@/assets/Rahul_Kumar_CV.pdf.asset.json";
import emailjs from "@emailjs/browser";

const contactItems = [
  { icon: Mail, label: "Email", value: "rahul.work1017@gmail.com", href: "mailto:rahul.work1017@gmail.com", color: "#7C3AED" },
  { icon: Phone, label: "Phone", value: "+91 7858059990", href: "tel:+917858059990", color: "#06B6D4" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rk1017", href: "https://linkedin.com/in/rk1017", color: "#EC4899" },
  { icon: Github, label: "GitHub", value: "github.com/Rah7858", href: "https://github.com/Rah7858", color: "#10B981" },
  { icon: MapPin, label: "Location", value: "Jharkhand, India", href: "#", color: "#F97316" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_17sjhrc",
        "template_xzfytoe",
        e.currentTarget,
        "o4p_zUzCvl8_fs3lj"
      )
      .then(() => {
        alert("✅ Message sent successfully! I will get back to you soon.");
        e.currentTarget.reset();
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        alert("❌ Failed to send message. Please try again.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-2 text-sm text-white/90 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-70" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#10B981]" />
            </span>
            Available for Work — Open immediately
          </motion.div>
        </div>

        <SectionHeader
          number="05"
          subtitle="Get in touch"
          title={<>Let's Build <span className="text-gradient-secondary">Something Amazing</span></>}
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Left */}
          <div className="space-y-3">
            {contactItems.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-cursor-hover
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl glass px-5 py-4 hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl shrink-0"
                  style={{ background: `${c.color}20`, color: c.color, boxShadow: `0 0 24px -10px ${c.color}` }}
                >
                  <c.icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-white/40 font-mono">{c.label}</div>
                  <div className="text-white truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl glass-strong p-7 sm:p-9 overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: "#7C3AED" }} />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ background: "#06B6D4" }} />

            <div className="relative grid sm:grid-cols-2 gap-4">
              <input type="hidden" name="subject" value="Portfolio Contact" />
              <Field label="Name" name="from_name" placeholder="Your name" required />
              <Field label="Email" name="from_email" type="email" placeholder="you@email.com" required />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-widest text-white/40 font-mono mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#06B6D4]/60 focus:ring-2 focus:ring-[#06B6D4]/20 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor-hover
              className="relative mt-5 w-full bg-gradient-primary rounded-xl px-6 py-3.5 font-semibold text-white inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] glow-purple disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "sent" ? (
                <><CheckCircle2 size={18}/> Message sent — I'll be in touch</>
              ) : status === "sending" ? (
                <><Send size={16} className="animate-pulse"/> Sending…</>
              ) : status === "error" ? (
                <>Something went wrong — try again</>
              ) : (
                <><Send size={16}/> Send Message</>
              )}
            </button>
          </motion.form>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={cvAsset.url}
            download="Rahul_Kumar_CV.pdf"
            data-cursor-hover
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white bg-gradient-secondary shadow-[0_0_40px_-10px_#EC489999] hover:scale-105 transition-transform"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/40 font-mono mb-2">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-[#7C3AED]/60 focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
      />
    </div>
  );
}
