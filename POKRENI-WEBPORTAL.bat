@echo off
chcp 65001 > nul
title FLUXA.BA / Studio TAF WebPortal Server (Port 3000)
color 0A

echo ==============================================================================
echo    FLUXA.ba & Studio TAF Master Web Platform - Next.js Production Server
echo ==============================================================================
echo.

cd /d "%~dp0"

echo [1/2] Provjera produkcijskog build-a...
if not exist ".next" (
    echo [.next folder ne postoji] Pokrecem kompajliranje...
    call npm run build
)

echo.
echo [2/2] Pokrecem Next.js server na portu 3000...
echo Adresa lokalno: http://localhost:3000
echo.

npm run start -- -p 3000

if %errorlevel% neq 0 (
    echo.
    echo [UPOZORENJE] Server je zaustavljen ili je doslo do greske.
    pause
)
