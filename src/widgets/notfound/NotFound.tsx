import { LinkButton, NotFoundIcon } from "shared/ui";
import "./NotFound.scss";

export const NotFound = () => {
    return(
        <section className="not-found">
            <div className="not-found__info">
                <div className="not-found__title">Oops....</div>
                <h1 className="not-found__title not-found__title_light">Page not found</h1>
                <p className="not-found__text">This Page doesn`t exist or was removed! We suggest you go back.</p>
                <LinkButton to = "/"  className="not-found__link">Go back</LinkButton>
            </div>
            <div className="not-found__icon">
                <NotFoundIcon />
            </div>
        </section>
    )
}