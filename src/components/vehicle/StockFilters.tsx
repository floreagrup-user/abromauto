import { BRANDS, FUELS, TRANSMISSIONS, BODY_TYPES, PRICE_MIN, PRICE_MAX, YEAR_MIN, YEAR_MAX } from '@/lib/facets'

export interface StockFilterState {
  marca: string
  combustibil: string
  transmisie: string
  caroserie: string
  pretMax: string
  anMin: string
  status: string
}

export const EMPTY_FILTERS: StockFilterState = {
  marca: '',
  combustibil: '',
  transmisie: '',
  caroserie: '',
  pretMax: '',
  anMin: '',
  status: 'available',
}

interface Props {
  filters: StockFilterState
  onChange: (next: StockFilterState) => void
  onReset: () => void
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-ink-500">{label}</span>
      {children}
    </div>
  )
}

const selectClass =
  'w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900'

export function StockFilters({ filters, onChange, onReset }: Props) {
  function set<K extends keyof StockFilterState>(key: K, value: string) {
    onChange({ ...filters, [key]: value })
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-bold text-ink-900">Filtre</h2>
        <button type="button" onClick={onReset} className="text-xs font-semibold text-primary-600 hover:underline">
          Resetează
        </button>
      </div>

      <Field label="Disponibilitate">
        <select className={selectClass} value={filters.status} onChange={(e) => set('status', e.target.value)}>
          <option value="available">Disponibile</option>
          <option value="coming-soon">Sosește în curând</option>
          <option value="sold">Vândute recent</option>
          <option value="">Toate</option>
        </select>
      </Field>

      <Field label="Marcă">
        <select className={selectClass} value={filters.marca} onChange={(e) => set('marca', e.target.value)}>
          <option value="">Toate mărcile</option>
          {BRANDS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </Field>

      <Field label="Caroserie">
        <select className={selectClass} value={filters.caroserie} onChange={(e) => set('caroserie', e.target.value)}>
          <option value="">Orice caroserie</option>
          {BODY_TYPES.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </Field>

      <Field label="Combustibil">
        <select className={selectClass} value={filters.combustibil} onChange={(e) => set('combustibil', e.target.value)}>
          <option value="">Orice combustibil</option>
          {FUELS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </Field>

      <Field label="Transmisie">
        <select className={selectClass} value={filters.transmisie} onChange={(e) => set('transmisie', e.target.value)}>
          <option value="">Orice transmisie</option>
          {TRANSMISSIONS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label={`Preț maxim (până la ${PRICE_MAX.toLocaleString('ro-RO')} €)`}>
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={500}
          value={filters.pretMax || PRICE_MAX}
          onChange={(e) => set('pretMax', e.target.value)}
          className="w-full accent-primary-500"
        />
        <span className="text-xs text-ink-500">
          {filters.pretMax ? `până la ${Number(filters.pretMax).toLocaleString('ro-RO')} €` : 'Fără limită'}
        </span>
      </Field>

      <Field label={`An minim (de la ${YEAR_MIN})`}>
        <input
          type="range"
          min={YEAR_MIN}
          max={YEAR_MAX}
          step={1}
          value={filters.anMin || YEAR_MIN}
          onChange={(e) => set('anMin', e.target.value)}
          className="w-full accent-primary-500"
        />
        <span className="text-xs text-ink-500">{filters.anMin ? `din ${filters.anMin}` : 'Orice an'}</span>
      </Field>
    </div>
  )
}
