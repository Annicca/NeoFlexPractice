import { FC } from "react";
import { GetNewsForm } from "features";
import "./EmailSubscribe.scss";

export const EmailSubscribe: FC = () => {
  return (
    <section className="email-subscribe">
      <div className="email-subscribe__support">Support</div>
      <h3 className="email-subscribe__title">Subscribe Newsletter & get</h3>
      <div className="email-subscribe__subtitle">Bank News</div>
      <GetNewsForm />
    </section>
  );
};
