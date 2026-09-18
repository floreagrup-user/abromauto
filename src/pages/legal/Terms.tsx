import { LegalLayout } from '@/components/layout/LegalLayout'
import { useDocumentHead } from '@/hooks/useDocumentHead'

export default function Terms() {
  useDocumentHead({ title: 'Termeni și condiții', canonicalPath: '/termeni-si-conditii/' })

  return (
    <LegalLayout title="Termeni și condiții">
      <p>
        Website-ul abromauto.ro este proprietatea SC ABROM TRANS SRL, cu sediul în Str. Unirii, Nr. 3, Loc. Alba
        Iulia, Jud. Alba, având număr de înregistrare în Registrul Comerțului J2024000013017, CUI 49361806. Abrom
        Auto este denumirea comercială sub care SC ABROM TRANS SRL își desfășoară activitatea de comercializare a
        autovehiculelor.
      </p>
      <p>
        Scopul principal al acestui website este acela de a pune la dispoziția oricăror persoane interesate, cu
        titlu gratuit, informații referitoare la stocul auto și serviciile oferite de Abrom Auto.
      </p>

      <h2>Proprietate intelectuală</h2>
      <p>
        Toate fotografiile, elementele de design și textele de pe acest site aparțin SC ABROM TRANS SRL și sunt
        protejate de Legea nr. 8/1996 privind drepturile de autor și drepturile conexe. Publicarea, copierea sau
        folosirea lor în scopuri comerciale se face numai cu acordul scris al proprietarului. Este permisă
        tipărirea paginilor sau salvarea fișierelor exclusiv pentru uz personal, necomercial.
      </p>

      <h2>Acuratețea informației</h2>
      <p>
        Informațiile oferite pe website (inclusiv dotări, prețuri sau disponibilitatea stocului) sunt destinate
        informării generale și sunt verificate periodic pentru a fi corecte și complete. Totuși, acestea pot
        prezenta uneori erori de dactilografiere sau omisiuni.
      </p>
      <p>
        SC ABROM TRANS SRL nu oferă nicio garanție implicită cu privire la informațiile prezentate, iar conținutul
        website-ului nu poate fi considerat un contract ferm sau o obligație asumată fără confirmarea scrisă a unui
        reprezentant Abrom Auto. Pentru o ofertă contractuală validă, vă rugăm să ne contactați direct.
      </p>

      <h2>Protecția datelor cu caracter personal</h2>
      <p>
        SC ABROM TRANS SRL respectă legislația în vigoare din România și Regulamentul European (GDPR) privind
        protecția datelor cu caracter personal. Ne angajăm să protejăm confidențialitatea datelor dvs. și să nu le
        înstrăinăm către terți în scopuri de marketing fără acordul dvs. prealabil. Pentru detalii complete,
        consultați pagina Politica de confidențialitate.
      </p>

      <h2>Politica privind modulele cookie</h2>
      <p>
        Website-ul abromauto.ro folosește cookie-uri pentru a asigura funcționarea corectă a site-ului și pentru a
        analiza traficul, oferindu-vă o experiență de navigare personalizată. Pentru detalii, accesați pagina
        Politica de cookie.
      </p>

      <h2>Legislație și jurisdicție</h2>
      <p>
        Orice dispută referitoare la utilizarea acestui website va fi soluționată pe cale amiabilă sau, în cazul în
        care acest lucru nu este posibil, de către instanțele judecătorești competente din România.
      </p>
    </LegalLayout>
  )
}
