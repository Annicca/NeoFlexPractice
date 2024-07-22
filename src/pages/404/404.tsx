import classNames from "classnames";
import { Footer, Header, NotFound } from "widgets";

const NotFoundPage = () => {
    return(
        <div className="wrapper">
            <div className={classNames("content", "main-content")}>
                <Header />
                <NotFound />
            </div>
            <Footer />
        </div>
    )
}

export default NotFoundPage;