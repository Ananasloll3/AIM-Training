@echo off

node -v >nul 2>&1

IF %ERRORLEVEL% EQU 0 (

   	echo Node.js est installé.
	IF EXIST ".\node_modules\electron\" (
		echo Pas de soucis, electron installer
	) ELSE (
		echo Electron non installer, Instalation : 
		npm install electron --save-dev
	)

	IF EXIST ".\node_modules\chalk\" (
		echo Pas de soucis, chalk installer
	) ELSE (
		echo Chalk@4 non installer, Instalation : 
		npm install chalk@4 --save-dev
	)

) ELSE (
	echo Node.js n'est PAS installé.
	start https://nodejs.org/fr
)



pause