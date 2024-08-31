//* --- HOOKS
import { useAppSelector } from '../../Store/hooks';

//* --- SCSS
import './information.scss';

function Information() {
  const country = useAppSelector(
    (state) => state.cityInfo?.country
  )?.toUpperCase();
  const postCode = useAppSelector((state) => state.cityInfo?.['post code']);
  const cities = useAppSelector((state) => state.cityInfo?.places);
  const lattitude = useAppSelector(
    (state) => state.cityInfo?.places[0].latitude
  );
  const longitude = useAppSelector(
    (state) => state.cityInfo?.places[0].longitude
  );
  const isLoading = useAppSelector((state) => state.isLoading);

  if (cities) {
    return (
      <div className="info-container">
        {isLoading ? (
          <div className="loader" />
        ) : (
          <>
            <h3 className="info-container-title">
              Information sur le code postal :
            </h3>

            <div className="info-container-item">
              <span>Pays : </span>
              {country}
            </div>

            <div className="info-container-item">
              <span>Code Postal : </span>
              {postCode}
            </div>

            <div className="info-container-item">
              <span>{cities?.length <= 1 ? `Ville` : `Villes`}: </span>
              {cities?.map((city) => (
                <p key={city['place name']}>{city['place name']}</p>
              ))}
            </div>

            <div className="info-container-item">
              <span>Lattitude : </span> {lattitude}
            </div>

            <div className="info-container-item">
              <span>Longitude : </span> {longitude}
            </div>
          </>
        )}
      </div>
    );
  }
  return (
    <div className="info-container">
      <div className="info-container-nodata">Aucune donnée à afficher.</div>
    </div>
  );
}

export default Information;
