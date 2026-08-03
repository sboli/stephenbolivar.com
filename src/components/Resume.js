import React from 'react';
import about from '../data/about';
import education from '../data/education';
import { info } from '../data/home';
import missions from '../data/missions';
import { professional, technical } from '../data/skills';

const months = [
  'janv.',
  'févr.',
  'mars',
  'avr.',
  'mai',
  'juin',
  'juil.',
  'août',
  'sept.',
  'oct.',
  'nov.',
  'déc.',
];

const formatDate = (date) => {
  if (!date) return 'Aujourd’hui';

  const [month, year] = date.split('-');
  return month ? `${months[Number(month) - 1]} ${year}` : year;
};

export default function Resume() {
  return (
    <article className="print-resume" aria-hidden="true">
      <header className="resume-header">
        <div>
          <p className="resume-eyebrow">Curriculum vitæ</p>
          <h1>{info.name}</h1>
          <p className="resume-title">Chief Technology Officer · Développeur fullstack</p>
        </div>
        <address className="resume-contact">
          <a href={`tel:${info.phone}`}>{info.prettyPhone}</a>
          <a href={`mailto:${info.mail}`}>{info.mail}</a>
          <span>stephenbolivar.com</span>
          <span>Guadeloupe, France</span>
        </address>
      </header>

      <section className="resume-intro" aria-labelledby="resume-profile-title">
        <h2 id="resume-profile-title">Profil</h2>
        <p>{about.htmlContent}</p>
      </section>

      <section className="resume-skills" aria-labelledby="resume-skills-title">
        <h2 id="resume-skills-title">Compétences</h2>
        <div className="resume-skill-groups">
          <div>
            <h3>Technique</h3>
            <p>{technical.map((skill) => skill.title).join(' · ')}</p>
          </div>
          <div>
            <h3>Management</h3>
            <p>{professional.map((skill) => skill.title).join(' · ')}</p>
          </div>
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-experience-title">
        <h2 id="resume-experience-title">Expérience professionnelle</h2>
        <div className="resume-timeline">
          {missions.map((mission) => (
            <article className="resume-entry" key={`${mission.company.name}-${mission.title}`}>
              <div className="resume-entry-heading">
                <div>
                  <h3>{mission.title}</h3>
                  <p className="resume-company">{mission.company.name}</p>
                </div>
                <p className="resume-date">
                  {formatDate(mission.start)} — {formatDate(mission.end)}
                </p>
              </div>
              <div
                className="resume-description"
                dangerouslySetInnerHTML={{ __html: mission.htmlContent }}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-education" aria-labelledby="resume-education-title">
        <h2 id="resume-education-title">Formation</h2>
        <div className="resume-education-list">
          {education.map((item) => (
            <article className="resume-education-entry" key={`${item.year}-${item.title}`}>
              <p className="resume-date">{item.year}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="resume-company">{item.school}</p>
                {item.htmlContent && (
                  <div
                    className="resume-description"
                    dangerouslySetInnerHTML={{ __html: item.htmlContent }}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="resume-footer">Stephen Bolivar · stephenbolivar.com</footer>
    </article>
  );
}
