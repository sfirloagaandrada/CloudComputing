Proiectul realizat pentru materia Cloud Computing constă într-o aplicație web simplă și intuitivă care demonstrează utilizarea a două servicii cloud: o bază de date NoSQL și un API personalizat. Scopul principal este gestionarea unui catalog de tehnologii moderne, unde utilizatorul poate adăuga, edita sau șterge informații despre diverse tehnologii.

Aplicația este împărțită în două secțiuni esențiale:

Modulul CRUD – Catalog Tehnologic:
Aici, utilizatorul poate crea, citi, edita și șterge tehnologii dintr-o bază de date. Fiecare tehnologie are un titlu, o descriere și o categorie (ex: Frontend, Backend, AI, Database). Acest modul mi-a permis să lucrez cu operații CRUD și să înțeleg integrarea bazei de date MongoDB Atlas prin API-uri Next.js.

Filtrare după categorie:
Utilizatorul poate filtra tehnologiile în funcție de categorie pentru o navigare mai ușoară. Această funcționalitate adaugă un plus de interactivitate și demonstrează cum pot fi aplicate filtre dinamice asupra datelor dintr-un serviciu cloud.

Prin această aplicație, am integrat două tehnologii cloud esențiale:

 - MongoDB Atlas pentru stocarea datelor tehnologice

 - API personal Next.js pentru manipularea datelor din interfață

Descierea sericiilor cloud folosite: 

1. MongoDB Atlas
MongoDB Atlas este o soluție de stocare NoSQL, în cloud, folosită pentru a salva date structurate despre tehnologii. În aplicația mea am gestionat o singură colecție:

records: fiecare înregistrare conține un title, description și category

Datele sunt accesate și manipulate prin API-uri proprii scrise în: 
- api/records
Framework-ul folosit pentru acest backend este Next.js, care oferă server-side routing și API endpoints gata de producție.
2. API intern Next.js

Am folosit API routes din Next.js pentru a:

-adăuga tehnologii noi în baza de date
-edita sau șterge tehnologii existente
-extrage toate tehnologiile disponibile
-aplica filtrare în funcție de categorie

Acest API rulează local și comunică direct cu MongoDB Atlas prin funcții de tip GET, POST, PATCH, DELETE.

TechZone – Catalog Tehnologic este o aplicație web în care utilizatorii pot crea, vizualiza, edita și șterge informații despre tehnologii actuale din domeniul IT. Fiecare tehnologie are un titlu, o descriere și o categorie, precum Frontend, Backend, AI sau Database. Utilizatorul poate adăuga tehnologii manual, apoi le poate filtra după categorie pentru a naviga mai ușor printre ele.
Este o aplicație simplă, intuitivă, dar care pune în practică concepte esențiale precum operații CRUD, stocare în cloud și API-uri personalizate.

#CAPTURA DE ECRAN

![alt text](image-2.png)