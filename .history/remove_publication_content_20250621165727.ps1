# PowerShell script to remove all content from publication index.md files
# This script will set the summary and abstract fields to empty strings

$publicationDir = "content\publication"
$directories = Get-ChildItem -Path $publicationDir -Directory | Where-Object { Test-Path (Join-Path $_.FullName "index.md") }

Write-Host "Found $($directories.Count) publication directories to process..."

foreach ($dir in $directories) {
    $indexPath = Join-Path $dir.FullName "index.md"
    Write-Host "Processing: $($dir.Name)"

    try {
        # Read the file content as raw text
        $content = Get-Content -Path $indexPath -Raw -Encoding UTF8

        # Replace abstract content (including multiline)
        $content = $content -replace '(?s)abstract:\s*[^#\n]*(?=\n\n#|\n#|$)', 'abstract: ""'

        # Replace summary content
        $content = $content -replace '(?m)^summary:\s*.*$', 'summary: ""'

        # Write the modified content back to the file
        Set-Content -Path $indexPath -Value $content -Encoding UTF8 -NoNewline

        Write-Host "  ✓ Successfully removed content from $($dir.Name)"
    }
    catch {
        Write-Host "  ✗ Error processing $($dir.Name): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`nCompleted processing all publication files."
