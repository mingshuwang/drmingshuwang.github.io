# PowerShell script to add author profile disable settings to all publication files

$publicationDirs = Get-ChildItem -Path "content/publication" -Directory

foreach ($dir in $publicationDirs) {
    $indexFile = Join-Path $dir.FullName "index.md"
    
    if (Test-Path $indexFile) {
        $content = Get-Content $indexFile -Raw
        
        # Check if the file already has the profile settings
        if ($content -notmatch "show_related:" -and $content -notmatch "profile:") {
            # Find the line with "featured: false" and add the profile settings after it
            $lines = Get-Content $indexFile
            $newLines = @()
            
            foreach ($line in $lines) {
                $newLines += $line
                
                if ($line -match "^featured:\s*false") {
                    $newLines += ""
                    $newLines += "# Show author profile cards at the bottom of the page?"
                    $newLines += "show_related: false"
                    $newLines += "profile: false"
                }
            }
            
            # Write the updated content back to the file
            $newLines | Set-Content $indexFile -Encoding UTF8
            Write-Host "Updated: $indexFile"
        } else {
            Write-Host "Skipped (already has settings): $indexFile"
        }
    }
}

Write-Host "Finished updating publication files."
