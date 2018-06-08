import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class RoPPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
        .more-space {
          padding: 25px 10px;
        }

        .rules-category__container {
          margin: 0px auto;
          padding: 20px;
        }

        .rules-category__title {
          text-align: center;
        }
      </style>
      <section >
        <section class="header-card__container more-space">
          <h1 class="header-card__title">Rules of Procedure</h1>
          <h3 class="header-card__tagline">code of conduct and working regulations for the MDMUN conference</h3>
        </section>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Secretariat</h1>
          <ol>
            <li>The Secretary General has the ultimate authority in regards to the rules of
procedure(RoP). The interpretation of the RoP shall be at his/her discretion and his/her
decision on the matters not specified in the RoP shall prevail over all other</li>
            <li>The Secretary General may at any time make oral and written statements to the
Committee concerning any topic. Any deviation from the provisional agenda shall be at
the approval of the Secretary General.</li>
            <li>The Secretary General shall assist the Chairs if necessary, receive and correct documents proposed by the committees and in enteral shall supervise over the good functioning
of the MDMUN conference</li>
          </ol>
        </div>
        <div class="rules-category__container">
          <h1 class="rules-category__title">Chairs</h1>
          <ol>
            <li>The chairs shall act as the directors of the committee and shall preside over its sessions.
They shall declare the opening and closure of each session, open and close of floor to
the points and motions and ensure the observerance of the RoP.</li>
            <li>The chairs shall have the authority in regards to the proceedings of the committee; they
shall have the right to rule out the points and motions they deem to be not constructive.
They shall keep the committee in order and direct them towards consensus. The chair
persons are in all time responsible to the Secretary General.</li>
          </ol>
        </div>
      </section>
    `
  }
}

window.customElements.define('rop-page', RoPPage);