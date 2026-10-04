import fs from 'fs'
import path from 'path'

const CONTENT_DIR = './content'
const CURRENT_YEAR = 1542

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  if (!content.startsWith('---')) return

  const frontmatterEnd = content.indexOf('---', 3)
  if (frontmatterEnd === -1) return

  let frontmatterText = content.substring(3, frontmatterEnd)
  let bodyText = content.substring(frontmatterEnd)

  const birthMatch = frontmatterText.match(/^Birth:\s*(.+)$/m)
  if (!birthMatch) return

  const birthStr = birthMatch[1].trim().replace(/^["']|["']$/g, '')
  const birth = parseInt(birthStr, 10)
  if (isNaN(birth)) return

  const deathMatch = frontmatterText.match(/^Death:\s*(.+)$/m)
  let death = undefined
  if (deathMatch && deathMatch[1].trim() !== '') {
    const deathStr = deathMatch[1].trim().replace(/^["']|["']$/g, '')
    const parsedDeath = parseInt(deathStr, 10)
    if (!isNaN(parsedDeath)) death = parsedDeath
  }

  let ageText = ''
  if (birth > CURRENT_YEAR) {
    const yearsUntilBirth = birth - CURRENT_YEAR
    ageText = `${yearsUntilBirth}y before they were born`
  } else if (death !== undefined) {
    const ageAtDeath = death - birth
    const yearsAgo = CURRENT_YEAR - death
    if (yearsAgo < 0) {
      ageText = `Died at ${ageAtDeath}y/o`
    } else if (yearsAgo === 0) {
      ageText = `Died this year at ${ageAtDeath}y/o`
    } else {
      ageText = `Died ${yearsAgo} years ago at ${ageAtDeath}y/o`
    }
  } else {
    const age = CURRENT_YEAR - birth
    ageText = `${age}y/o`
  }

  // Uppdatera eller lägg till Age-fältet i frontmatter
  if (/^Age:/m.test(frontmatterText)) {
    frontmatterText = frontmatterText.replace(/^Age:.*$/m, `Age: "${ageText}"`)
  } else {
    frontmatterText += `\nAge: "${ageText}"`
  }

  const updatedContent = `---${frontmatterText}${bodyText}`
  fs.writeFileSync(filePath, updatedContent, 'utf8')
}

function walkDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      walkDir(fullPath)
    } else if (file.endsWith('.md')) {
      processFile(fullPath)
    }
  }
}

console.log('Räknar ut åldrar för alla karaktärer...')
walkDir(CONTENT_DIR)
console.log('Klar! Alla åldrar uppdaterade.')