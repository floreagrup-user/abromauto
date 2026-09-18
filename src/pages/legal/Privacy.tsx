import { LegalLayout } from '@/components/layout/LegalLayout'
import { useDocumentHead } from '@/hooks/useDocumentHead'

export default function Privacy() {
  useDocumentHead({ title: 'Politica de confidențialitate', canonicalPath: '/privacy-policy/' })

  return (
    <LegalLayout title="Politica de confidențialitate">
      <p>
        Prezentul website abromauto.ro este proprietatea SC ABROM TRANS SRL, cu numărul de înregistrare în
        Registrul Comerțului J2024000013017, CUI 49361806, cu sediul în Str. Unirii, Nr. 3, Loc. Alba Iulia, Jud.
        Alba.
      </p>
      <p>
        SC ABROM TRANS SRL se supune și respectă toate legile în vigoare din România privind protecția datelor cu
        caracter personal. Ne asumăm angajamentul de a prelua și procesa datele pe care ni le furnizați în
        conformitate cu legislația națională și cu Regulamentul (UE) 2016/679 (GDPR).
      </p>

      <h2>Cum colectăm sau obținem informații despre Dvs.</h2>
      <ul>
        <li>Când furnizați voluntar datele respective — telefon, e-mail sau formularul de contact de pe site.</li>
        <li>Când accesați website-ul nostru, unele date sunt colectate prin cookie-uri și tehnologii similare.</li>
      </ul>

      <h2>Ce informații putem colecta</h2>
      <p>
        Nume, număr de telefon, adresa de e-mail, informații din cookie-uri, informații despre dispozitivul
        utilizat, informații despre modul în care utilizați website-ul (pagini accesate, data/ora accesării,
        click-uri), locația geografică aproximativă bazată pe adresa IP, numele companiei (dacă este aplicabil) și
        datele de facturare (dacă solicitați o ofertă pe persoană juridică).
      </p>

      <h2>Cum utilizăm datele Dvs.</h2>
      <p>
        Strict pentru a vă contacta, pentru a răspunde solicitărilor de ofertă, pentru a procesa cererile de
        finanțare sau achiziție și pentru a îmbunătăți experiența de navigare pe site.
      </p>

      <h2>Dezvăluirea datelor către părți terțe</h2>
      <p>
        Doar minimul necesar pentru funcționarea afacerii (furnizori IT, mentenanță site), respectarea obligațiilor
        legale (contabilitate, autorități fiscale) sau contractuale (parteneri de finanțare/leasing, dacă
        solicitați). Datele nu sunt vândute către terți.
      </p>

      <h2>Cât timp stocăm informațiile Dvs.</h2>
      <p>
        În conformitate cu obligațiile legale (ex: arhive contabile/fiscale) sau pe perioada necesară pentru a
        îndeplini scopul colectării (ex: finalizarea vânzării unui autovehicul).
      </p>

      <h2>Cum sunt securizate datele Dvs.</h2>
      <p>
        Stocare pe servere securizate, criptarea transferurilor cu SSL și acces limitat doar personalului autorizat
        care are nevoie de aceste date pentru sarcinile de serviciu.
      </p>

      <h2>Drepturile Dvs. (GDPR)</h2>
      <ul>
        <li>Dreptul de acces — confirmarea prelucrării și accesul la date.</li>
        <li>Dreptul la rectificare — corectarea sau completarea datelor inexacte.</li>
        <li>Dreptul la ștergere ("dreptul de a fi uitat").</li>
        <li>Dreptul la restricționarea prelucrării.</li>
        <li>Dreptul la portabilitatea datelor.</li>
        <li>Dreptul la opoziție — la prelucrarea în scopuri de marketing direct sau interes legitim.</li>
        <li>Dreptul de a vă retrage consimțământul în orice moment.</li>
        <li>Dreptul de a depune o plângere la ANSPDCP.</li>
      </ul>

      <h2>Cum înaintați o plângere sau o solicitare</h2>
      <p>E-mail: office@abromauto.ro · Telefon: 0786 087 474</p>
    </LegalLayout>
  )
}
