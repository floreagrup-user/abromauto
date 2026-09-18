import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { submitLead, type LeadKind } from '@/lib/leads'

interface Props {
  kind: LeadKind
  vehicleTitle?: string
  showDateFields?: boolean
  submitLabel?: string
}

export function LeadForm({ kind, vehicleTitle, showDateFields = false, submitLabel = 'Trimite' }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submitLead({
      kind,
      name,
      phone,
      email: email || undefined,
      message: message || undefined,
      vehicleTitle,
      preferredDate: preferredDate || undefined,
      preferredTime: preferredTime || undefined,
    })
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-emerald-50 p-6 text-center ring-1 ring-emerald-200">
        <p className="font-display text-lg font-bold text-emerald-800">Te-am redirecționat către WhatsApp</p>
        <p className="mt-2 text-sm text-emerald-700">
          Dacă nu s-a deschis automat, ne poți scrie și direct la numărul afișat în subsol.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-semibold text-emerald-800 underline"
        >
          Trimite altă cerere
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {vehicleTitle && (
        <div className="rounded-lg bg-primary-50 px-3.5 py-2.5 text-sm text-primary-800">
          Sunt interesat de <strong>{vehicleTitle}</strong>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink-500">Nume *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold text-ink-500">Telefon *</span>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink-500">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
          autoComplete="email"
        />
      </label>

      {showDateFields && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500">Zi preferată</span>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500">Interval orar</span>
            <input
              type="text"
              placeholder="ex: 14:00 - 16:00"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
            />
          </label>
        </div>
      )}

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink-500">Mesaj</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="rounded-lg border border-ink-200 px-3 py-2.5 text-sm"
        />
      </label>

      <Button type="submit" icon={<Send className="h-4 w-4" />} className="justify-center">
        {submitLabel}
      </Button>
    </form>
  )
}
