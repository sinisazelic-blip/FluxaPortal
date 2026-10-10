@echo off
chcp 65001 > nul
title Instalacija Cloudflare Tunel Windows Servisa (web.studiotaf.xyz)
color 0E

echo ==============================================================================
echo    Instalacija Cloudflare Tunnel-a kao trajnog Windows Servisa
echo ==============================================================================
echo.
echo Ovaj postupak registruje Cloudflare Tunnel da se automatski podize
echo sa Windows operativnim sistemom (radi u pozadini kao servis).
echo.
echo NAPOMENA: Za instalaciju servisa potrebno je pokrenuti ovaj .bat kao Administrator!
echo.

set /p CF_TOKEN="Unesite Cloudflare Tunnel Token za web.studiotaf.xyz: "

if "%CF_TOKEN%"=="" (
    echo [GRESKA] Morate unijeti token!
    pause
    exit /b 1
)

echo.
echo [1/2] Instaliram Windows servis...
"C:\Program Files (x86)\cloudflared\cloudflared.exe" service install %CF_TOKEN%

if %errorlevel% neq 0 (
    echo.
    echo [GRESKA] Neuspjesna instalacija servisa. Jeste li pokrenuli kao Administrator?
    pause
    exit /b 1
)

echo [2/2] Pokrecem servis...
net start cloudflared

echo.
echo ==============================================================================
echo [OK] Cloudflare Tunnel servis je uspjesno instaliran i aktivan!
echo WebPortal je sada trajno dostupan preko domena: https://web.studiotaf.xyz
echo ==============================================================================
echo.
pause
