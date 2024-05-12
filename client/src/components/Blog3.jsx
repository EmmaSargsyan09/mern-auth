import React from 'react'; 
import BlogSectionImg from '../images/english-books.jpg'; 
import './Blog3.css';

function Blog3() { return ( <div className='about-page'>
  <div className='container my-5'>
        <div className="row">
            <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                <h2 className='mb-4 mb-lg-5'>Business English: базовые принципы успешных переговоров</h2>
                <p className='unique-class-1'>Существует несколько базовых принципов, которые могут помочь вести успешные переговоры в бизнесе:</p>
                <ol>
                <li>Подготовка: перед началом переговоров необходимо провести подробный анализ ситуации, определить свои цели и интересы, изучить собеседника и предполагаемые альтернативы решения проблемы.</li>
                <li>Установление доверительных отношений: важно установить хорошие отношения с партнерами по переговорам, это поможет сделать общение более открытым и продуктивным.</li>
                <li>Четкость и ясность: в ходе переговоров необходимо быть предельно четким и ясным в своих высказываниях, избегая недопониманий и двусмысленностей.</li>
                <li>Гибкость и адаптивность: в процессе переговоров может возникнуть необходимость изменить стратегию или тактику в зависимости от обстоятельств, поэтому важно быть гибким и готовым к изменениям.</li>
                <li>Умение слушать и понимать: важно не только высказывать свои аргументы, но и внимательно слушать собеседника, стараясь понять его точку зрения и интересы.</li>
                <li>Нахождение общего решения: целью переговоров должно быть нахождение взаимовыгодного решения для всех сторон, поэтому важно искать компромиссы и учитывать интересы всех участников переговоров.</li>
            </ol>
               
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={BlogSectionImg} className='img-fluid w-75' alt="" />
            </div>
        </div>
    </div>

    <div style={{ textAlign: 'center' }}> 
        <h2>Деловой английский</h2> 
        <p className='content-type'>Главная рекомендация — практикуйтесь, и тогда ваши результаты будут становиться лучше с каждым разом. А чтобы не терять времени даром и эффективно нарабатывать ценные навыки, записывайтесь на курсы делового английского </p>
        
        <div className="photos">
            <img src="https://img.freepik.com/free-photo/english-books-with-blue-background_23-2149440456.jpg?t=st=1715442685~exp=1715446285~hmac=091f55fd8c904ce937cca4b51e836b4412201a4db9695edd467ccf892d4ca9ce&w=360" alt="Photo 1" />
            <img src="https://img.freepik.com/free-photo/view-english-books-arrangement_23-2149440495.jpg?t=st=1715442696~exp=1715446296~hmac=fc5f7c48d91c45924f01066f947469852444d4cfa4447666f50886bead09a217&w=360" alt="Photo 2" />
            <img src="https://img.freepik.com/free-photo/english-books-arrangement-with-blue-background_23-2149440454.jpg?t=st=1715442751~exp=1715446351~hmac=30e1b29160f062e05bea57e83910d05ff79a76a255ebaa6ea6cb184cfcde558f&w=360" alt="Photo 3" />
        </div>
    </div>
</div>
); }

export default Blog3;