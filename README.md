# 💡 TechZone – Catalog Tehnologic

##  Descriere

**TechZone – Catalog Tehnologic** este o aplicație web modernă, dezvoltată pentru cursul de **Cloud Computing**, care permite adăugarea, modificarea și organizarea tehnologiilor software. Proiectul ajută utilizatorii (dezvoltatori sau echipe) să creeze un catalog tehnologic personalizat, în care pot documenta diverse librării, frameworkuri, baze de date sau servicii cloud folosite în proiectele lor.

Scopul aplicației este să ofere o interfață clară, intuitivă și responsivă pentru gestionarea acestor tehnologii într-un mod eficient.

---

##  Introducere

Proiectul se bazează pe două servicii cloud esențiale, integrate într-o aplicație web simplă și funcțională:

1. **Modul CRUD** – utilizatorul poate crea, citi, edita sau șterge înregistrări cu tehnologii. Această componentă a permis aplicarea practică a conceptelor de baze de date în cloud și a API-urilor personalizate pentru manipularea datelor.
2. **Persistența în MongoDB Atlas** – toate datele sunt salvate și accesate dintr-o bază de date NoSQL găzduită în cloud.

---

##  Funcționalități principale

- ✅ Adăugare tehnologie cu titlu, descriere și categorie
- ✅ Editare rapidă a oricărei înregistrări
- ✅ Ștergerea unei tehnologii din catalog
- ✅ Căutare live după categorie (ex: “frontend”, “AI” etc.)
- ✅ Interfață adaptată (responsive)
- ✅ Integrare cu MongoDB Atlas (cloud database)
- ✅ API personalizat pentru operații CRUD

---

##  Servicii cloud utilizate

### 1. **MongoDB Atlas**

MongoDB Atlas este un serviciu cloud NoSQL folosit pentru stocarea și manipularea datelor aplicației.

- Datele salvate includ: titlu, descriere și categorie
- Am utilizat o singură colecție principală: `records`
- Interacțiunea cu baza de date se face prin API-ul propriu creat în `/api/records`, folosind Next.js API routes

---

##  Tehnologii utilizate

- **Next.js** – Framework React pentru aplicații web moderne
- **Tailwind CSS** – Stilizare rapidă și elegantă
- **MongoDB Atlas** – Bază de date NoSQL în cloud
- **Vercel** (opțional) – Deploy rapid și gratuit pentru aplicații Next.js

---

##  Capturi de ecran
![image](https://github.com/user-attachments/assets/cfda72dc-70d9-4068-a6ee-b454161a5b24)
![image](https://github.com/user-attachments/assets/63282f79-ef38-454b-aa0a-413e2b99eb78)
![image](https://github.com/user-attachments/assets/24355729-f068-42f3-a1dc-b93212830d95)


---

##  Concluzie

TechZone este o aplicație practică și utilă pentru orice dezvoltator care dorește să-și structureze stack-ul tehnologic. Folosirea MongoDB în cloud și a API-urilor personalizate într-un mediu Next.js demonstrează integrarea completă a serviciilor moderne cloud într-un proiect real.

---

## Realizat pentru cursul de Cloud Computing

Video YouTube: https://www.youtube.com/watch?v=OCIQAhvcJLU

Va multumesc!
