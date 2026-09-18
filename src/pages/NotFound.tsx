import { Container } from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { useDocumentHead } from '@/hooks/useDocumentHead'

export default function NotFound() {
  useDocumentHead({ title: 'Pagina nu a fost găsită', noindex: true })

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-6xl font-extrabold text-ink-200">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink-900">Pagina nu a fost găsită</h1>
      <p className="mt-2 max-w-sm text-ink-600">
        Mașina sau pagina căutată nu mai este disponibilă. Poate a fost deja vândută sau link-ul e greșit.
      </p>
      <div className="mt-6 flex gap-3">
        <LinkButton to="/">Acasă</LinkButton>
        <LinkButton to="/stoc-auto/" variant="outline">Vezi mașinile</LinkButton>
      </div>
    </Container>
  )
}
