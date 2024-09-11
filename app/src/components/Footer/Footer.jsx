import Link from "next/link"
export default function Footer() {
  return (
    <div className="flex flex-col gap-4 text-white text-center p-4">
      <h2>Vous n&apos;avez plus aucune excuse pour ne pas connaître la météo du jour, même vous les geeks aux yeux fermés ! :)</h2>
      <p>MétéoDou - Créé par <Link href="https://romain-hernandez.com" target="_blank" className="font-bold">Roms</Link></p>
    </div>
  )
}
