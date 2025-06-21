# Safe script to fix publication titles
$publicationDirs = Get-ChildItem -Path "content/publication" -Directory

# Define known titles for publications that might be corrupted
$knownTitles = @{
    "agile-preface-2024" = "Preface to AGILE: GIScience Series"
    "ai-society-culture-cycle-2023" = "AI, society and culture cycle: what can we learn from the Chinese AI strategy?"
    "air-pollutant-industrial-2023" = "Elucidation of spatial disparities of factors that affect air pollutant concentrations in industrial regions at a continental level"
    "air-pollutant-industrial-regions-2023" = "Elucidation of spatial disparities of factors that affect air pollutant concentrations in industrial regions at a continental level"
    "big-data-human-movement-2017" = "Big data for human movement analysis"
    "bike-sharing-taxi-choice-2019" = "Bike sharing or taxi? Modeling the choices of travel mode in Chicago using machine learning"
    "bikesharing-congestion" = "Bikesharing and urban congestion"
    "cannabis-crowdsourcing-2016" = "Crowdsourcing geospatial data for earth and human observations: a review"
    "co2-emission-data-comparison-2017" = "A comparison of CO2 emission data from satellite observations and bottom-up emission inventories"
    "conference-paper" = "An example conference paper"
    "construction-demolition-england" = "Construction and demolition waste management in England: A spatial analysis"
}

foreach ($dir in $publicationDirs) {
    $indexFile = Join-Path $dir.FullName "index.md"
    
    if (Test-Path $indexFile) {
        Write-Host "Processing: $($dir.Name)"
        
        try {
            # Read the file content
            $lines = Get-Content $indexFile
            
            # Find the title line
            for ($i = 0; $i -lt $lines.Count; $i++) {
                if ($lines[$i] -match '^title:\s*"(.+)"$') {
                    $currentTitle = $matches[1]
                    
                    # Check if title is corrupted (starts with year)
                    if ($currentTitle -match '^\d{4}\s*\(\d{4}\)') {
                        Write-Host "  Found corrupted title: $currentTitle"
                        
                        # Use known title if available
                        if ($knownTitles.ContainsKey($dir.Name)) {
                            $cleanTitle = $knownTitles[$dir.Name]
                            Write-Host "  Using known title: $cleanTitle"
                        } else {
                            # Try to extract from corrupted title
                            if ($currentTitle -match '^\d{4}\s*\(\d{4}\)(.+)') {
                                $cleanTitle = $matches[1].Trim()
                                if ($cleanTitle.StartsWith('"')) { $cleanTitle = $cleanTitle.Substring(1) }
                                if ($cleanTitle.EndsWith('"')) { $cleanTitle = $cleanTitle.Substring(0, $cleanTitle.Length - 1) }
                                Write-Host "  Extracted title: $cleanTitle"
                            } else {
                                Write-Host "  Could not fix title for: $($dir.Name)"
                                continue
                            }
                        }
                        
                        # Extract year from date
                        $yearLine = $lines | Where-Object { $_ -match 'date:\s*[''"]?(\d{4})' }
                        if ($yearLine -and $yearLine -match '(\d{4})') {
                            $year = $matches[1]
                            $newTitle = "$cleanTitle ($year)"
                            $lines[$i] = "title: `"$newTitle`""
                            
                            # Write back to file
                            Set-Content -Path $indexFile -Value $lines
                            Write-Host "  Fixed title: $newTitle"
                        }
                    } else {
                        Write-Host "  Title looks OK: $currentTitle"
                    }
                    break
                }
            }
        } catch {
            Write-Host "  Error processing $($dir.Name): $($_.Exception.Message)"
        }
    }
}

Write-Host "Completed fixing publications!"
