param(
    [Parameter(Mandatory=$true)]
    $namespace,
    $templateNamespace = 'ArchitectNow.Boilerplate.Angular2',
    [Switch]
    $WhatIf
)

$scriptRoot = $PSScriptRoot
Set-Location $scriptRoot

$root = Resolve-Path ..\

function Rename-Folders {
    $items = Get-ChildItem -Path $root -Include "$templateNamespace*" -Recurse -Directory
    foreach($item in $items){
        $currentName = $item.Name

        $newName = $currentName -replace $templateNamespace, $namespace

        Write-Host "`t$currentName -> $newName"

        $item | Rename-Item -NewName $newName -WhatIf:([bool]$WhatIf)
    }
}

function Rename-Files {
    $items = Get-ChildItem -Path $root -Include "$templateNamespace*" -Recurse -File
    foreach($item in $items){
        $currentName = $item.Name

        $newName = $currentName -replace $templateNamespace, $namespace

        Write-Host "`t$currentName -> $newName"

        $item | Rename-Item -NewName $newName -WhatIf:([bool]$WhatIf)
    }
}

function Update-Namespaces {
    $match = ".*$templateNamespace.*"
    $items = Get-ChildItem -Path $root -Recurse -Exclude '*.ps1' -File | Select-String -Pattern $match | Select-Object -Unique Path -ExpandProperty Path
        
    foreach($item in $items){
        Write-Host "`t$item"
        
        (Get-Content $item).Replace($templateNamespace, $namespace) | Set-Content $item -WhatIf:([bool]$WhatIf)        
    }
}


Write-Host 'Renaming folders...'
Rename-Folders

Write-Host 'Renaming files...'
Rename-Files

Write-Host 'Updating namespaces...'
Update-Namespaces

