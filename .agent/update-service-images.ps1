# Script to update all service page hero images

$servicePaths = @(
    "contact-centre-outsourcing",
    "content-writing",
    "digital-marketing",
    "finance-accounts",
    "graphic-web-designing",
    "hire-developers",
    "hire-virtual-assistance",
    "mobile-app-development",
    "social-media-management"
)

$basePath = "c:\Users\Rohan Salal\OneDrive\Desktop\ProtechPlanner\Protechplanner\app\services"

foreach ($service in $servicePaths) {
    $filePath = Join-Path $basePath "$service\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Updating $service..." -ForegroundColor Green
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Replace placeholder images with the new hero image
        $content = $content -replace 'src="https://placehold\.co/[^"]*"', 'src="/service-icons/administrtive-support/Group 1000003314 (1).png"'
        
        # Write back to file
        Set-Content -Path $filePath -Value $content -NoNewline
        
        Write-Host "✓ Updated $service" -ForegroundColor Cyan
    }
    else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nAll service pages updated successfully!" -ForegroundColor Green
