//* --- SCSS
import './Header.scss';

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-container-banner">O&apos;ZipCode</div>
      </div>
      <div className="main">
        <p className="description">
          L&apos;application O&apos;ZipCode simplifie la recherche de villes en
          fonction des codes postaux. <br />
          Lorsque vous entrez un code postal dans le formulaire,
          l&apos;application effectue une requête à une base de données complète
          et renvoie instantanément le nom de la ville ou des villes
          correspondantes. <br />
          Cette fonctionnalité est particulièrement utile pour les services de
          livraison, les entreprises de déménagement et les voyageurs qui
          souhaitent rapidement identifier une localité. <br />
        </p>
        <p className="slogan">
          Essayez O&apos;ZipCode pour des recherches rapides et précises de
          villes basées sur les codes postaux !
        </p>
      </div>
    </>
  );
}

export default Header;
