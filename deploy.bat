@echo off
cls
echo ===================================================
echo   LAUNCHPILOT AI - PUSH TO GITHUB
echo ===================================================
echo.
cd /d D:\launchpilot-ai

echo Pushing clean codebase to GitHub...
echo.
git push -f origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo   SUCCESS! Code pushed to GitHub:
    echo   https://github.com/ShreeyashK99/launchpilot-ai
    echo ===================================================
) else (
    echo ===================================================
    echo   PUSH FAILED. Please check terminal output above.
    echo ===================================================
)

echo.
pause
