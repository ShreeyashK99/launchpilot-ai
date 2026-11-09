@echo off
cls
echo ===================================================
echo   LAUNCHPILOT AI - PUSH TO GITHUB
echo ===================================================
echo.
cd /d D:\launchpilot-ai

echo Checking repository status...
git status
echo.

echo Pushing code to GitHub...
echo (If this is your first push, make sure you created the repo at https://github.com/new?name=launchpilot-ai)
echo.
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo   SUCCESS! Code pushed to GitHub:
    echo   https://github.com/ShreeyashK99/launchpilot-ai
    echo ===================================================
) else (
    echo ===================================================
    echo   PUSH FAILED:
    echo   Make sure you created the repo on GitHub first!
    echo   Click here: https://github.com/new?name=launchpilot-ai
    echo ===================================================
)

echo.
pause
