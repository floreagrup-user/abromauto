import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import { vehicleImages } from '@/lib/images'
import type { Vehicle } from '@/types/vehicle'

export function VehicleGallery({ vehicle }: { vehicle: Vehicle }) {
  const images = vehicleImages(vehicle)
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const count = images.length

  function next() {
    setIndex((i) => (i + 1) % count)
  }
  function prev() {
    setIndex((i) => (i - 1 + count) % count)
  }

  useEffect(() => {
    if (!lightbox) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, count])

  if (count === 0) return null

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:aspect-[16/10]">
        <img
          src={images[index].detail}
          alt={`${vehicle.brand} ${vehicle.model} — foto ${index + 1}/${count}`}
          className="h-full w-full cursor-zoom-in object-contain"
          loading="eager"
          decoding="async"
          onClick={() => setLightbox(true)}
        />
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label="Vezi galeria fullscreen"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-700 shadow-sm hover:bg-white"
        >
          <Expand className="h-4.5 w-4.5" />
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Foto anterioară"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-700 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Foto următoare"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-700 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.thumb}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                i === index ? 'ring-primary-500' : 'ring-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img.thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/95">
          <div className="flex items-center justify-between p-4 text-white">
            <span className="text-sm">{index + 1} / {count}</span>
            <button type="button" onClick={() => setLightbox(false)} aria-label="Închide galeria">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
            <img
              src={images[index].detail}
              alt={`${vehicle.brand} ${vehicle.model} — foto ${index + 1}/${count}`}
              className="max-h-full max-w-full object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Foto anterioară"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Foto următoare"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
