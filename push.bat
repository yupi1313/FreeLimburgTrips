@echo off
set GIT="D:\Program Files\Git\cmd\git.exe"
%GIT% add -A
%GIT% commit -m "Add photo gallery section with 18 real trip photos + lightbox"
%GIT% push origin main
