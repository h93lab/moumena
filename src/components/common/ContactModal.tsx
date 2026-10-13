import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const dialogRef = useModalAccessibility(isOpen, onClose);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setSendError(false);
    try {
      const website = new FormData(e.currentTarget).get('website');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Message delivery failed');
      setFormData({ name: '', email: '', message: '' });
      setFormSent(true);
    } catch {
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#121214] border border-[#2E333D] rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10 overflow-hidden"
          >
            {/* Top accent glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#B600A8]/20 blur-3xl pointer-events-none rounded-full" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                  {t.contact.badge}
                </span>
                <h3 id="contact-dialog-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                  {t.contact.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contact quick info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#1A1C22] border border-white/5">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#B600A8] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Email</div>
                    <div className="text-xs font-medium text-white truncate">
                      {PORTFOLIO_DATA.profile.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 ml-1"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={PORTFOLIO_DATA.profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1A1C22] border border-white/5 hover:border-[#B600A8]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Phone &amp; WhatsApp</div>
                  <div className="text-xs font-medium text-white">
                    {PORTFOLIO_DATA.profile.phone}
                  </div>
                </div>
              </a>
            </div>

            {/* Direct message form */}
            {formSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{t.contact.sentTitle}</h4>
                <p className="text-sm text-slate-400 max-w-xs">
                  {t.contact.sentMsg}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    maxLength={120}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Miller"
                    className="w-full bg-[#181A20] border border-[#2E333D] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    maxLength={254}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@agency.com"
                    className="w-full bg-[#181A20] border border-[#2E333D] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1">
                    {t.contact.msgLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your upcoming campaign, brand project, or motion graphics vision..."
                    className="w-full bg-[#181A20] border border-[#2E333D] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                {sendError && (
                  <p role="alert" className="text-sm text-rose-300">
                    {t.contact.sendError}{' '}
                    <a className="underline underline-offset-2" href={`mailto:${PORTFOLIO_DATA.profile.email}`}>
                      {t.contact.emailFallback}
                    </a>
                  </p>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PORTFOLIO_DATA.profile.location}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    aria-busy={isSending}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium tracking-wide uppercase transition-all duration-200 outline-2 outline-white -outline-offset-3 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    <span>{isSending ? t.contact.sending : t.contact.sendBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
