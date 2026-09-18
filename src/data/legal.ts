// Verbatim legal text extracted from abromauto.ro (_research/current-site/legal-pages.md).
// Do not paraphrase without owner sign-off.

export interface LegalSection {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export interface LegalPage {
  slug: string
  legacyUrl?: string
  title: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalPage = {
  slug: 'politica-de-confidentialitate',
  legacyUrl: 'https://abromauto.ro/privacy-policy/',
  title: 'Politică de Confidențialitate',
  sections: [
    {
      heading: 'Cine suntem',
      paragraphs: [
        'Prezentul website abromauto.ro este proprietatea SC ABROM TRANS SRL, cu numărul de înregistrare în Registrul Comerțului J2024000013017, CUI 49361806, cu sediul în Str. Unirii, Nr. 3, Loc. Alba Iulia, Jud. Alba.',
        'SC ABROM TRANS SRL se supune și respectă toate legile în vigoare din România privind protecția datelor cu caracter personal. Ne asumăm angajamentul de a prelua și procesa datele pe care ni le furnizați în conformitate cu legislația națională și cu Regulamentul (UE) 2016/679 (GDPR).',
      ],
    },
    {
      heading: 'Cum colectăm sau obținem informații despre Dvs',
      paragraphs: [],
      list: [
        'Când furnizați voluntar datele respective, de exemplu prin contactarea noastră prin telefon, adresele de e-mail oficiale sau formularul de contact de pe site.',
        'Când accesați website-ul nostru, unele date sunt colectate prin intermediul cookie-urilor și altor tehnologii similare.',
      ],
    },
    {
      heading: 'Ce informații putem să colectăm',
      paragraphs: [
        'Nume, număr de telefon, adresa de e-mail, informații din cookie-uri, informații despre dispozitivul utilizat, informații despre modul în care utilizați website-ul nostru (pagini accesate, data/ora accesării, click-uri), locația geografică aproximativă bazată pe adresa IP, numele companiei (dacă este aplicabil) și datele de facturare (dacă solicitați o ofertă pe persoană juridică).',
      ],
    },
    {
      heading: 'Cum utilizăm datele Dvs',
      paragraphs: [
        'Datele sunt utilizate strict pentru a vă contacta, pentru a răspunde solicitărilor dvs. de ofertă, pentru a procesa cererile de finanțare sau achiziție și pentru a îmbunătăți experiența de navigare pe site.',
      ],
    },
    {
      heading: 'Dezvăluirea datelor către părți terțe',
      paragraphs: [
        'Minimul necesar pentru funcționarea afacerii (furnizori de servicii IT, mentenanță site), respectarea obligațiilor legale (contabilitate, autorități fiscale) sau respectarea obligațiilor contractuale față de Dvs. (ex: parteneri de finanțare/leasing, dacă solicitați acest lucru). Datele utilizatorilor nu sunt vândute către părți terțe.',
      ],
    },
    {
      heading: 'Cât timp sunt stocate informațiile Dvs',
      paragraphs: [
        'Stocăm informațiile în conformitate cu obligațiile noastre legale (ex: arhive contabile/fiscale) sau pe perioada necesară pentru a îndeplini scopul colectării (ex: finalizarea vânzării unui autovehicul).',
      ],
    },
    {
      heading: 'Cum sunt securizate datele Dvs',
      paragraphs: [
        'Utilizăm soluții tehnice și organizatorice moderne: stocarea informațiilor pe servere securizate, criptarea transferurilor de date utilizând tehnologia SSL, și limitarea accesului la datele Dvs. personale doar personalului autorizat care are nevoie de acestea pentru îndeplinirea sarcinilor de serviciu.',
      ],
    },
    {
      heading: 'Drepturile Dvs. în legătură cu datele personale (GDPR)',
      paragraphs: [],
      list: [
        'Dreptul de acces – de a primi confirmarea prelucrării și acces la datele respective.',
        'Dreptul la rectificare – de a cere corectarea sau completarea datelor inexacte.',
        'Dreptul la ștergere ("dreptul de a fi uitat") – de a cere eliminarea datelor din baza noastră.',
        'Dreptul la restricționarea prelucrării – de a limita modul în care folosim datele.',
        'Dreptul la portabilitatea datelor – de a primi datele într-un format structurat.',
        'Dreptul la opoziție – de a vă opune prelucrării în scopuri de marketing direct sau interes legitim.',
        'Dreptul de a vă retrage consimțământul în orice moment.',
        'Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).',
      ],
    },
    {
      heading: 'Cum înaintați o plângere sau o solicitare',
      paragraphs: ['E-mail: office@abromauto.ro · Telefon: 0786 087 474'],
    },
  ],
}

export const cookiePolicy: LegalPage = {
  slug: 'politica-cookie',
  legacyUrl: 'https://abromauto.ro/politica-privind-modulele-cookie/',
  title: 'Politică privind modulele Cookie',
  sections: [
    {
      heading: 'Ce sunt cookie-urile?',
      paragraphs: [
        'Acest site folosește cookie-uri pentru a îmbunătăți performanța și pentru a spori experiența utilizatorului care vizitează site-ul nostru.',
        'Un cookie este un fișier de mici dimensiuni care se salvează pe computerul tău atunci când vizitezi un website. Acest microfișier permite reținerea setărilor și preferințelor tale, astfel încât la următoarea vizită site-ul respectiv își va aminti de tine și nu va fi nevoie să faci din nou aceleași setări.',
        'Poți refuza utilizarea cookie-urilor prin setările adecvate din browserul tău. Cookie-urile nu sunt viruși sau fișiere malware și nu pot fi folosite pentru a rula programe sau a transmite viruși informatici în dispozitivul tău.',
      ],
    },
    {
      heading: 'Tipuri de cookie-uri',
      paragraphs: [],
      list: [
        'Cookie-uri de sesiune: stocate temporar în browser până la ieșire/închiderea ferestrei.',
        'Cookie-uri Persistente: stocate pe dispozitiv, folosite la fiecare vizită ulterioară; includ „third party cookies" (plasate de terți), folosite anonim pentru a memora interesele utilizatorului și a livra publicitate relevantă.',
      ],
    },
    {
      heading: 'Ce cookie-uri folosim pe abromauto.ro?',
      paragraphs: [],
      list: [
        'Cookie-uri de performanță și urmărire (anonime, comportament pe site).',
        'Statistici vizitatori (tehnologii folosite, erori de afișare).',
        'Marketing — dacă îți exprimi acordul, platforma abromauto.ro poate folosi instrumente precum Google Analytics și Facebook Pixel.',
      ],
    },
    {
      heading: 'Cum puteți opri cookie-urile',
      paragraphs: [
        'Din setările browserului (Chrome, Firefox, Safari, Edge). Informații suplimentare: YourOnlineChoices Romania.',
        'Pentru întrebări despre cookie-uri: vanzari@abromauto.ro sau office@abromauto.ro.',
      ],
    },
  ],
}

export const termsAndConditions: LegalPage = {
  slug: 'termeni-si-conditii',
  legacyUrl: 'https://abromauto.ro/refund_returns/',
  title: 'Termeni și Condiții',
  sections: [
    {
      heading: 'Despre acest website',
      paragraphs: [
        'Website-ul abromauto.ro este proprietatea SC ABROM TRANS SRL, cu sediul în Str. Unirii, Nr. 3, Loc. Alba Iulia, Jud. Alba, având număr de înregistrare în Registrul Comerțului J2024000013017, CUI 49361806. Abrom Auto este denumirea comercială sub care SC ABROM TRANS SRL își desfășoară activitatea de comercializare a autovehiculelor.',
        'Scopul principal al acestui website este acela de a pune la dispoziția oricăror persoane interesate, cu titlu gratuit, informații referitoare la stocul auto și serviciile oferite de Abrom Auto.',
      ],
    },
    {
      heading: 'Proprietate intelectuală',
      paragraphs: [
        'Toate fotografiile, elementele de design și textele de pe acest site aparțin SC ABROM TRANS SRL și sunt protejate de Legea nr. 8/1996 privind drepturile de autor și drepturile conexe. Publicarea, copierea sau folosirea lor în scopuri comerciale se face numai cu acordul scris al proprietarului. Este permisă tipărirea paginilor sau salvarea fișierelor exclusiv pentru uz personal, necomercial.',
      ],
    },
    {
      heading: 'Acuratețea informației',
      paragraphs: [
        'Informațiile oferite pe website-ul nostru (inclusiv dotări, prețuri sau disponibilitatea stocului) sunt destinate informării generale și sunt verificate periodic pentru a fi corecte și complete. Totuși, acestea pot prezenta uneori erori de dactilografiere sau omisiuni.',
        'În consecință, SC ABROM TRANS SRL nu oferă nicio garanție implicită cu privire la informațiile prezentate, iar conținutul website-ului nu poate fi considerat un contract ferm sau o obligație asumată fără confirmarea scrisă a unui reprezentant Abrom Auto. Pentru o ofertă contractuală validă, vă rugăm să ne contactați direct.',
      ],
    },
    {
      heading: 'Protecția datelor cu caracter personal',
      paragraphs: [
        'SC ABROM TRANS SRL respectă legislația în vigoare din România și Regulamentul European (GDPR) privind protecția datelor cu caracter personal. Ne angajăm să protejăm confidențialitatea datelor dvs. și să nu le înstrăinăm către terți în scopuri de marketing fără acordul dvs. prealabil. Pentru detalii complete, vă rugăm să consultați pagina Politică de Confidențialitate.',
      ],
    },
    {
      heading: 'Legislație și jurisdicție',
      paragraphs: [
        'Orice dispută referitoare la utilizarea acestui website va fi soluționată pe cale amiabilă sau, în cazul în care acest lucru nu este posibil, de către instanțele judecătorești competente din România.',
      ],
    },
  ],
}
