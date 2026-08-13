export default function Confidentialite() {
  return (
    <section className="legal-page">
      <div className="container legal-container">
        <div className="section-label">Protection des données</div>
        <h1 className="section-title legal-title">Politique de confidentialité</h1>

        <div className="legal-card">
          <div className="legal-block">
            <h2>Responsable du traitement</h2>
            <p>
              Les données personnelles sont collectées par Clément Carré,
              micro-entrepreneur, nom commercial Maison CLM.
            </p>
            <p>Email : maison.clm.contact@gmail.com</p>
          </div>

          <div className="legal-block">
            <h2>Collecte des données</h2>
            <p>
              Les données collectées via le formulaire de contact, la demande de
              mini-audit ou par email sont utilisées uniquement dans le cadre
              d’échanges professionnels.
            </p>
          </div>

          <div className="legal-block">
            <h2>Données collectées</h2>
            <p>Les informations susceptibles d’être collectées incluent :</p>
            <ul>
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Nom de l’organisation</li>
              <li>Adresse du site à analyser</li>
              <li>Contenu du message</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Finalité du traitement</h2>
            <p>
              Les données sont utilisées exclusivement pour répondre aux demandes de
              contact, préparer le mini-audit demandé et échanger dans un cadre
              professionnel.
            </p>
          </div>

          <div className="legal-block">
            <h2>Base légale</h2>
            <p>
              Le traitement des données repose sur le consentement de l’utilisateur
              lorsqu’il remplit le formulaire de contact.
            </p>
          </div>

          <div className="legal-block">
            <h2>Durée de conservation</h2>
            <p>
              Les données sont conservées pendant une durée maximale de 3 ans à compter
              du dernier contact, sauf obligation légale contraire.
            </p>
          </div>

          <div className="legal-block">
            <h2>Partage des données</h2>
            <p>Aucune donnée personnelle n’est vendue, échangée ou cédée à des tiers.</p>
          </div>

          <div className="legal-block">
            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies à des fins de fonctionnement ou de mesure
              d’audience. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </div>

          <div className="legal-block">
            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de rectification,
              de suppression et d’opposition concernant vos données personnelles.
            </p>
            <p>Vous pouvez exercer ces droits à tout moment via : maison.clm.contact@gmail.com</p>
            <p>
              Vous avez également le droit d’introduire une réclamation auprès de la CNIL.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
