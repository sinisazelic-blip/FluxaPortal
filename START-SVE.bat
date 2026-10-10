@echo off
chcp 65001 > nul
title FLUXA.BA - Start Sve (Server + Tunel)
color 0F

echo ==============================================================================
echo    Pokretanje FLUXA.ba WebPortala i Cloudflare Tunela
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [1/2] Pokrecem Next.js WebPortal server u zasebnom prozoru...
start "FLUXA.ba Web Server" cmd /k "POKRENI-WEBPORTAL.bat"

timeout /t 3 /nobreak > nul

echo [2/2] Pokrecem Cloudflare Tunel...
start "Cloudflare Tunnel" cmd /k "POKRENI-TUNEL.bat"

echo.
echo [OK] Oba servisa su pokrenuta!
echo.
