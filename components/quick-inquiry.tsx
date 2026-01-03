
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, X } from "lucide-react"

export function QuickInquiry() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col items-end gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="rounded-full w-12 h-12 bg-white text-indigo-900 hover:bg-indigo-50 border border-indigo-100 shadow-lg">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email Us</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#020617] border-white/10 text-white">
              <DialogHeader>
                <DialogTitle className="text-white">Quick Inquiry</DialogTitle>
              </DialogHeader>
              <form className="grid gap-4 mt-4">
                <Input placeholder="Name" className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500" />
                <Input placeholder="Email" type="email" className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500" />
                <Textarea placeholder="How can we help?" className="bg-slate-900/50 border-white/10 text-white placeholder:text-slate-500 min-h-[100px]" />
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white">Send Message</Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button asChild size="icon" className="rounded-full w-12 h-12 bg-white text-indigo-900 hover:bg-indigo-50 border border-indigo-100 shadow-lg">
            <a href="tel:+18438884894">
              <Phone className="w-5 h-5" />
              <span className="sr-only">Call Us</span>
            </a>
          </Button>

          <Button asChild size="icon" className="rounded-full w-12 h-12 bg-white text-indigo-900 hover:bg-indigo-50 border border-indigo-100 shadow-lg">
            <a href="https://wa.me/918377963214" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </a>
          </Button>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`rounded-full w-16 h-16 shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-800 hover:bg-slate-700 text-white rotate-90' : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:scale-110'}`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </Button>
    </div>
  )
}
