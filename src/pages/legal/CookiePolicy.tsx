import { LegalLayout } from '@/components/layout/LegalLayout'
import { useDocumentHead } from '@/hooks/useDocumentHead'

export default function CookiePolicy() {
  useDocumentHead({ title: 'Politica de cookie-uri', canonicalPath: '/politica-cookie/' })

  return (
    <LegalLayout title="Politica privind modulele cookie">
      <p>
        Acest site folosește cookie-uri pentru a îmbunătăți performanța și pentru a spori experiența utilizatorului
        care vizitează site-ul nostru.
      </p>

      <h2>Ce sunt cookie-urile?</h2>
      <p>
        Un cookie este un fișier de mici dimensiuni care se salvează pe computerul tău atunci când vizitezi un
        website. Permite reținerea setărilor și preferințelor tale, astfel încât la următoarea vizită site-ul își va
        aminti de tine. Poți refuza utilizarea cookie-urilor din setările browserului. Cookie-urile nu sunt viruși
        sau malware și pot fi citite doar de serverul care le-a salvat.
      </p>
      <ul>
        <li><strong>Cookie-uri de sesiune:</strong> stocate temporar, până la închiderea ferestrei.</li>
        <li>
          <strong>Cookie-uri persistente:</strong> stocate pe dispozitiv, folosite la fiecare vizită ulterioară;
          includ "third party cookies" (plasate de terți, ex. Google sau Facebook), folosite anonim pentru
          publicitate relevantă.
        </li>
      </ul>

      <h2>Avantajele cookie-urilor</h2>
      <p>
        Rețin preferințele de confidențialitate, limba site-ului sau oferă publicitate relevantă în funcție de
        interesele tale, evitând mesaje repetitive care nu te interesează.
      </p>

      <h2>Durata de viață a unui cookie</h2>
      <p>Variază — unele expiră la finalul sesiunii, altele rămân stocate o perioadă determinată; se pot șterge oricând din setările browserului.</p>

      <h2>Cookie-uri plasate de terți</h2>
      <p>
        Unele secțiuni (videoclipuri, hărți Google Maps, reclame) pot plasa propriile cookie-uri prin furnizori
        terți, cu obligația de a respecta legea și politicile de confidențialitate.
      </p>

      <h2>Ce cookie-uri folosim pe abromauto.ro</h2>
      <ul>
        <li>Cookie-uri de performanță și urmărire (anonime, comportament pe site).</li>
        <li>Statistici vizitatori (tehnologii folosite, erori de afișare).</li>
        <li>
          Marketing — dacă îți exprimi acordul, platforma abromauto.ro poate folosi instrumente precum Google
          Analytics și Facebook Pixel.
        </li>
      </ul>

      <h2>Cum puteți opri cookie-urile</h2>
      <p>Din setările browserului (Chrome, Firefox, Safari, Edge). Informații suplimentare: YourOnlineChoices Romania.</p>

      <h2>Contact pentru întrebări despre cookie-uri</h2>
      <p>vanzari@abromauto.ro sau office@abromauto.ro</p>
    </LegalLayout>
  )
}
