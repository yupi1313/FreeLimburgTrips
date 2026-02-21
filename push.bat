@echo off
set GIT="D:\Program Files\Git\cmd\git.exe"
%GIT% add -A
%GIT% commit -m "Restyle: match freelimburg.nl dark gold theme + stadium photos (Bilbao, Dusseldorf, Sicily, Rome)"
%GIT% push origin main
