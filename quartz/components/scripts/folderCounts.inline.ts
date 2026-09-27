document.addEventListener("nav", () => {
  const folderButtons = document.querySelectorAll<HTMLButtonElement>(".folder-button")
  
  folderButtons.forEach((btn) => {
    const folderContainer = btn.closest(".folder-container")
    if (!folderContainer) return
    
    // Räkna endast direktliggande filer (.md) i mappen
    const fileCount = folderContainer.querySelectorAll(":scope > ul > li:not(.folder-container)").length
    const titleSpan = btn.querySelector(".folder-title")
    
    if (titleSpan && !titleSpan.textContent?.includes("(")) {
      titleSpan.textContent = `${titleSpan.textContent} (${fileCount})`
    }
  })
})