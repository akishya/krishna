@echo off
echo.
echo  ========================================
echo   GitaGuru Server - Starting...
echo  ========================================
echo.
cd /d "%~dp0"
node server.js
echo.
echo  Server stopped. Press any key to exit.
pause >nul
