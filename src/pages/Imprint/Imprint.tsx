import React from 'react';

import { Section } from '../../components/Section';
import DiamondIcon from '../../img/diamond.svg?react';
import { Button } from '../../components/Button';

import classes from './style.module.scss';

export function Imprint(): React.JSX.Element {
  return (
    <>
      <Section className={classes.root} id="imprint" title="Impressum">
        <DiamondIcon className={classes.diamond} />
        <div className={classes.item}>
          <div className={classes.item__container}>
            Angaben gem. § 5 TMG:
            <br />
            Alan, Uecker
            <br />
            Lützner Str. 69
            <br />
            04177 Leipzig
            <br />
            <br />
            Kontaktaufnahme: uecker.alan@gmail.com
            <br />
            <br />
            Haftung für Inhalte: Im Sinne von § 7 Absatz 1 TMG sind wir für die
            eigenen Inhalte auf dieser Webseite verantwortlich. Durch §§ 8 bis
            einschließlich 10 TMG sind wir aber nicht verpflichtet, gespeicherte
            oder übermittelte fremde Inhalte zu überwachen oder diese auf
            Rechtswidrigkeit zu prüfen. Das befreit uns jedoch nicht von der
            Pflicht, der Sperrung und Entfernung von Informationen nach
            geltenden Gesetzen nachzukommen.
          </div>
        </div>
      </Section>
      <Section className={classes.root} id="legal" title="Legal">
        <DiamondIcon className={classes.diamond} />
        <div className={classes.item}>
          <div className={classes.item__container}>
            <div className={classes.button_container}>
              <Button
                to="https://www.flaticon.com/free-icons/responsive-design"
                title="Responsive design icons created by Freepik - Flaticon"
              />
              <Button
                to="https://www.flaticon.com/free-icons/monitor"
                title="Monitor icons created by Freepik - Flaticon"
              />
              <Button
                to="https://www.flaticon.com/free-icons/control-panel"
                title="Control panel icons created by Freepik - Flaticon"
              />
              <Button
                to="https://www.flaticon.com/free-icons/imaging"
                title="Imaging icons created by Freepik - Flaticon"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
