Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\AI\FreeLimburgTrips\public\como_lake.png')
# Crop 280 pixels from the left to remove the leftmost girl
$cropWidth = $img.Width - 280
$cropRect = New-Object System.Drawing.Rectangle(280, 0, $cropWidth, $img.Height)
$bmp = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, $bmp.Height)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save('C:\Users\q1qoo\.gemini\antigravity\brain\30693ac5-5d8f-4e09-9ab2-f3df0def3861\como_lake_cropped.png', [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host 'Cropped image saved successfully.'
