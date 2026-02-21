@echo off
set GIT="D:\Program Files\Git\cmd\git.exe"
%GIT% init
%GIT% add .
%GIT% commit -m "Initial commit: FreeLimburgTrips site"
%GIT% remote add origin https://github.com/yupi1313/FreeLimburgTrips.git
%GIT% branch -M main
%GIT% push -u origin main
