# PowerShell script to remove all content from publication index.md files
# This script will set the summary and abstract fields to empty strings

$publicationDir = "content\publication"
$directories = Get-ChildItem -Path $publicationDir -Directory | Where-Object { Test-Path (Join-Path $_.FullName "index.md") }

Write-Host "Found $($directories.Count) publication directories to process..."

foreach ($dir in $directories) {
    $indexPath = Join-Path $dir.FullName "index.md"
    Write-Host "Processing: $($dir.Name)"
    
    try {
        # Read the file content line by line
        $lines = Get-Content -Path $indexPath -Encoding UTF8
        
        # Process each line
        for ($i = 0; $i -lt $lines.Count; $i++) {
            # Remove summary content
            if ($lines[$i] -match '^summary:\s*.*$') {
                $lines[$i] = 'summary: ""'
            }
            # Remove abstract content
            if ($lines[$i] -match '^abstract:\s*.*$') {
                $lines[$i] = 'abstract: ""'
            }
        }
        
        # Write the modified content back to the file
        Set-Content -Path $indexPath -Value $lines -Encoding UTF8
        
        Write-Host "  ✓ Successfully removed content from $($dir.Name)"
    }
    catch {
        Write-Host "  ✗ Error processing $($dir.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nCompleted processing all publication files."
