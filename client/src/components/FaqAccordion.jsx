import React, { useState } from 'react';
import './FaqAccordion.css';

function FaqAccordion() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-center text-capitalize mb-5">Часто задаваемые вопросы</h2>
        
        <div className="accordion">
          {[
            {
              question: 'Есть ли возможность получить сертификат об окончании курсов YourTechEnglish?',
              answer: 'Да, по окончании курсов вы получите сертификат, подтверждающий ваше владение техническим английским языком'
            },
            {
              question: 'Как вы поддерживаете свои курсы в курсе новейших технологий и тенденций отрасли?',
              answer: 'Мы регулярно обновляем материалы наших курсов и учебную программу, чтобы отразить последние достижения в ИТ-индустрии, гарантируя, что наши студенты изучают актуальную и актуальную информацию'
            },
            
            {
              question: 'Какие уровни владения английским языком мы можем достичь после окончания курсов? ',
              answer: 'Мы предлагаем курсы для всех уровней - от начинающего до продвинутого. По результатам обучения вы сможете уверенно общаться на английском языке в технической среде'
            },
            {
              question: 'Что отличает YourTechEnglish от других школ английского языка для ИТ-специалистов?',
              answer: 'SНаши преподаватели — это не только квалифицированные преподаватели языка, но и опытные ИТ-специалисты, которые дают студентам уникальный взгляд на язык, используемый в отрасли'
            }
            
          ].map((item, index) => (
            <div key={index} className={`accordion-item ${activeItem === index ? 'active' : ''}`}>
              <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                {item.question}
              </button>
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;