import { MapIcon } from "shared/ui";

import "./MapSection.scss";

export const MapSection = () => {
  return (
    <section className="map">
      <h2 className="title-h2">
        You can use our services anywhere in the world
      </h2>
      <div className="map__subtitle">
        Withdraw and transfer money online through our application
      </div>
      <MapIcon className="map__img" />
    </section>
  );
};
