# Deploy na Hetzner server (`fluxa.ba` / `WebPortal`)

DigitalOcean App Platform se više ne koristi. Produkcija za `fluxa.ba` (`WebPortal`) i prateće servise radi na njemačkom **Hetzner** serveru.

---

## 1. Pristup serveru

SSH konfiguracija je u `~/.ssh/config` (`Host fluxa hetzner`):

- **Host:** `hetzner` (ili `fluxa`)
- **IP:** `37.27.155.137`
- **Korisnik:** `root`

---

## 2. Putanje i PM2 procesi na Hetzner serveru

| Aplikacija | Folder na serveru | PM2 proces |
|---|---|---|
| **WebPortal (`fluxa.ba`)** | `/var/www/fluxa.ba` | `fluxa-web` |
| **Fluxa App (`app.fluxa.ba`)** | `/var/www/app.fluxa.ba` | `fluxa-app` |
| **StudioWEB** | `/var/www/studiotaf.xyz` | `studio-web` |
| **Fluxa HUB (`x.fluxa.ba`)** | `/var/www/x.fluxa.ba` | `fluxa-hub` |

> **Važno:** Na serveru u `/var/www/fluxa.ba` postoje lokalni fajlovi `.env.local` i `server.js` (untracked) koje **ne treba dirati niti brisati**.

---

## 3. Standardni tok ažuriranja (`WebPortal` → `fluxa.ba`)

### Korak 1: Lokalno (`D:\Dev\WebPortal`)
```powershell
cd D:\Dev\WebPortal
npm run build
git add -A
git commit -m "opis izmjene"
git push origin main
```
Repozitorij: `https://github.com/sinisazelic-blip/FluxaPortal.git` (grana `main`).

### Korak 2: Deploy na Hetzner server
```powershell
ssh hetzner "cd /var/www/fluxa.ba && git pull origin main && npm install && npm run build && pm2 restart fluxa-web"
```

### Korak 3: Provjera statusa
```powershell
ssh hetzner "pm2 list"
```
Status procesa `fluxa-web` treba biti `online`.
