import type {NextPage} from 'next'
import Head from 'next/head'
import React from "react";
import Image from "next/image";
import Link from 'next/link';

const Security: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Green Website</title>
        <meta name="green website" content="portfolio generated with next.js"/>
        <link rel="icon" href="/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"/>
      </Head>

      <div className="absolute z-0">
        <Image src="/vector5.svg" alt="Background Vector" width={393} height={278}/>
      </div>

      <div className="z-10 p-12 relative">
        <div className="flex items-center justify-between w-full">
          <span className="text-dark-green font-bold">
            <Link href="/">
            <a
              target="_self"
              rel="noopener noreferrer">Green Website</a></Link>
          </span>
        </div>
        <div className="flex mt-24 flex-col w-3/5">


          <h3><strong><big>Datenschutzerklärung</big></strong></h3><br/>
          <p><strong>Allgemeiner Hinweis und Pflichtinformationen</strong></p>
          <p><strong>Benennung der verantwortlichen Stelle</strong></p><br/>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p><br/><br/>
          <span>Frau Alina Otten</span><span>Am Pesch 28</span><span>40625 Düsseldorf</span><br/>
          <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p><br/>

          <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
          <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf
            Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung
            per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unberührt.</p>
          <br/>
          <p><strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</strong></p>
          <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
            Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
            folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              target="_blank" rel="noreferrer" >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html </a>.
          </p>
          <br/>
          <p><strong>Recht auf Datenübertragbarkeit</strong></p>
          <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
            maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
          <br/>
          <p><strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</strong></p>
          <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft
            über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich
            und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
            aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
          <br/>
          <p><strong>SSL- bzw. TLS-Verschlüsselung</strong></p>
          <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
            Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
            über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an
            der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>
          <br/>
          <p><strong>Google Web Fonts</strong></p>
          <p>Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.</p>
          <p>Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer Website
            zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den
            Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre
            Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der
            Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser
            Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und Übertragung unseres
            Webauftritts.</p>
          <p>Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen &quot;Privacy Shield&quot; zertifiziert.
            Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus
            gewährleisten.</p>
          <p>Einzelheiten über Google Web Fonts finden Sie unter: <a
            href="https://www.google.com/fonts#AboutPlace:about">https://www.google.com/fonts#AboutPlace:about</a> und
            weitere Informationen in den Datenschutzbestimmungen von Google: <a
              href="https://policies.google.com/privacy/partners?hl=de">https://policies.google.com/privacy/partners?hl=de</a>
          </p>
          <br/> <p><small>Quelle: Datenschutz-Konfigurator von <a href="http://www.mein-datenschutzbeauftragter.de"
                                                                  target="_blank" rel="noreferrer" >mein-datenschutzbeauftragter.de</a></small>
        </p>


        </div>
        <footer className="flex items-center justify-center mt-8 relative">
            <span className="flex items-center">
              <Link href="/imprint">
            <a
              target="_self"
              rel="noopener noreferrer"
            >Imprint &nbsp; &nbsp;</a></Link> |
            <Link href="/security"><a
              target="_self"
              rel="noopener noreferrer"
            > &nbsp; &nbsp;Data Security</a></Link>
             </span>
        </footer>
      </div>
    </div>
  )
}

export default Security
