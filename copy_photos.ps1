New-Item -ItemType Directory -Force 'd:\AI\FreeLimburgTrips\public\photos' | Out-Null
$src = 'D:\AI\FreeLimburgTrips\Photos'
$dst = 'd:\AI\FreeLimburgTrips\public\photos'
Get-ChildItem $src | Where-Object { $_.Extension -match '\.(jpg|jpeg|png)$' } | ForEach-Object {
    Copy-Item $_.FullName -Destination (Join-Path $dst $_.Name.ToLower())
}
Write-Host ('Copied ' + (Get-ChildItem $dst).Count + ' files')
