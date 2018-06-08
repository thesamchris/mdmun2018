import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class IntroPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
       b {
         color: #f5bd34;
       }
       .sg-word-container {
         margin-top: 10px;
         padding: 20px;
       }
      </style>
      <section class="normal-page-container">
        <section class="header-card__container">
          <h1 class="header-card__title">Introduction to MDMUN</h1>
          <h3 class="header-card__tagline">What is MDMUN?</h3>
        </section>
        <p class="normal-page-body">MDMUN is MD’s version of Model UNITED NATIONS. Model UN is an extra curricular activity that allows students to take on the role of delegates of a country and take part in a simulative conference as is done by the UN. Here students have an opportunity to learn the ways of the UN, the problems they face and actions taken to combat the issues our world encounters. It is also an excellent way gain skills such as leadership, public speaking, critical thinking and cooperation, all of which are essential to a student in their future endeavours. It also opens students’ eyes to the world we live in and instill in them an awareness. This awareness is what will lead them to be the leaders of tomorrow and the hope of the future that our world so desperately needs.
        </p>
        <b>So let’s all unite for a better tomorrow!</b>

        <div class="sg-word-container">
          <p class="section-title">Word from Secretary Generals</p>
          <p>We are proud MDians and we may be young. But that doesn’t mean we are not capable of making a change in the world around us. We are to be the leaders, someday not too far from now, when we will be met with various challenges. MDMUN aspires to be an activity that gives students a head start into leadership roles as they will be roleplaying as representatives of a country who will be involved in making decisions of gravity. Moreover, a lot of students are out of their comfort zones here, and this is a valuable lesson, because as adults, we’ll have to interact and work with very diverse people. Furthermore, it allows students to push their boundaries to prepare them for their future.</p>
          <p>This year, MDMUN is focusing on goal 16 of the UN’s Sustainable Development Goals: Peace, Justice and strong institutions.  This goal was chosen because we believe the youth should not be blind to the fact our world faces crisis upon crisis, day by day. It threatens the peace our world needs, and puts millions of lives at stake. It is of utmost importance that solutions are found and put into effect as soon as possible. Our aim at MDMUN is to encourage students to think of this from a young age so that tomorrow when they are in positions of power, they do not falter and know how to heal this world.</p>
          <p>As the Secretary Generals of this event for this year, we wished most for the idea of MUN to reach more people and spread awareness of some issues that had us fearful of the future to come and most importantly, to create a platform where students can share their thoughts and voice out their opinions on our world, giving them a chance to have their voice heard. We sincerely hope that MDMUN manages to help students find in them, compassion for this world and a need to help it heal and grow. As those who will take charge in some time, we must be responsible to better our species and let it reach the gates of infinity.</p>
          <p>We congratulate you all for taking part in this event which might as well equal to the first step taken by you to start playing your role as a leader! We hope you all walk away at the end with a sense of accomplishment, a sense of awareness, a whole new array of skills and confidence , new friends and last but not least, some great memories. We look forward to seeing you all!</p>
        </div>
      </section>
    `
  }
}

window.customElements.define('intro-page', IntroPage);
