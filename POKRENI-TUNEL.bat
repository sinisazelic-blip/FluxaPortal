@echo off
chcp 65001 > nul
title Cloudflare Tunel - web.studiotaf.xyz / fluxa.ba
color 0B

echo ==============================================================================
echo    Cloudflare Tunnel Launcher za WebPortal (http://localhost:3000)
echo ==============================================================================
echo.

cd /d "%~dp0"

echo Izaberite nacin pokretanja tunela:
echo   [1] Pokreni sa Cloudflare Tokenom (za web.studiotaf.xyz ili fluxa.ba)
echo   [2] Pokreni brzi Quick-Tunnel (Automatski dodijeljen privremeni .trycloudflare.com URL)
echo.
set /p MODE="Izbor [1 ili 2, default=1]: "

if "%MODE%"=="2" (
    echo.
    echo Pokrecem Cloudflare Quick Tunnel ka portu 3000...
    "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://localhost:3000
) else (
    echo.
    if exist ".cf-token" (
        set /p SAVED_TOKEN=<.cf-token
    )
    
    if not "%SAVED_TOKEN%"=="" (
        echo Pronadjen sacuvani Cloudflare Token.
        echo Zelite li ga iskoristiti?
        echo   [1] Da, koristi postojeci token
        echo   [2] Ne, unesi novi token
        set /p TOKEN_CHOICE="Izbor [1 ili 2, default=1]: "
        if "%TOKEN_CHOICE%"=="2" set SAVED_TOKEN=
    )

    if "%SAVED_TOKEN%"=="" (
        echo.
        echo Unesite Cloudflare Tunnel Token (kopirajte iz Cloudflare Zero Trust Dashboard-a):
        set /p SAVED_TOKEN="Token: "
        if not "%SAVED_TOKEN%"=="" (
            echo %SAVED_TOKEN%>.cf-token
            echo [OK] Token sacuvan u .cf-token fajlu za buduca pokretanja.
        )
    )

    if "%SAVED_TOKEN%"=="" (
        echo [GRESKA] Token nije unesen! Pokrecem Quick-Tunnel kao alternativu...
        "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://localhost:3000
    ) else (
        echo.
        echo Pokrecem Cloudflare Tunnel sa tokenom...
        "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel run --token %SAVED_TOKEN%
    )
)

echo.
pause
