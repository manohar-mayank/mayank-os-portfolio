import { contact, gmailUrl, phoneUrl } from "../data/profile";
import { textLinkClass } from "../utils/styles";

export function ContactSection() {
  return (
    <section id="contact" className="bg-lime-300 text-[#19210c]">
      <div className="mx-auto w-[91vw] max-w-6xl py-20 md:py-28">
        <span className="font-mono text-[10px] tracking-[.09em]">
          05 / NEXT CONNECTION
        </span>
        <h2 className="mt-6 text-[clamp(3.4rem,7vw,6rem)] font-bold leading-[.92] tracking-[-.075em]">
          Have a good
          <br />
          problem to <em className="font-serif">solve?</em>
        </h2>
        <p className="mt-6 max-w-md text-base leading-7">
          I&apos;m always interested in useful products, sharp ideas, and teams
          that care about details.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
   
          <a
            className="bg-[#19210c] px-5 py-3 text-sm font-bold text-lime-300"
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
          >
            Email me ↗
          </a>

          {phoneUrl && (
            <a className={textLinkClass} href={phoneUrl}>
              Call me ↗
            </a>
          )}
          
          <a
            className={textLinkClass}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className={textLinkClass}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className={textLinkClass}
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
