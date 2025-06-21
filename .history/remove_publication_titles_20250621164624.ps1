# PowerShell script to remove titles from all publication index.md files
# This script will set the title field to an empty string while preserving all other content

$publicationDir = "content\publication"
$directories = Get-ChildItem -Path $publicationDir -Directory | Where-Object { Test-Path (Join-Path $_.FullName "index.md") }

Write-Host "Found $($directories.Count) publication directories to process..."

foreach ($dir in $directories) {
    $indexPath = Join-Path $dir.FullName "index.md"
    Write-Host "Processing: $($dir.Name)"
    
    try {
        # Read the file content
        $content = Get-Content -Path $indexPath -Raw -Encoding UTF8
        
        # Replace the title line with empty title
        # This regex matches the title line and replaces the content between quotes with empty string
        $newContent = $content -replace '(?m)^title:\s*"[^"]*"', 'title: ""'
        
        # Write the modified content back to the file
        Set-Content -Path $indexPath -Value $newContent -Encoding UTF8 -NoNewline
        
        Write-Host "  ✓ Successfully removed title from $($dir.Name)"
    }
    catch {
        Write-Host "  ✗ Error processing $($dir.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nCompleted processing all publication files."
