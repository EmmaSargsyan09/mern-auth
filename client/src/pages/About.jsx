import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../images/about-us-section-img.jpg';
import ChooseSection from '../components/ChooseSection';
import Person1 from '../images/person1.jpg';
import Person2 from '../images/person2.jpg';
import Person3 from '../images/person3.jpg';
import Person4 from '../images/person4.jpg';
import Person5 from '../images/person5.jpg';
import Person6 from '../images/person6.jpg';
import Person7 from '../images/person7.jpg';
import Person8 from '../images/person8.jpg';
import Person9 from '../images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1],
        name: 'Иванова Ольга Владимировна',
        profession: 'Преподаватель бизнес-английского'
    },
    {
        id: 2,
        img: [Person2],
        name: 'Петрова Анна Сергеевна',
        profession: 'Разработчик онлайн курсов по английскому'
    },
    {
        id: 3,
        img: [Person3],
        name: 'Сидоров Руслан Александрович',
        profession: 'Онлайн-куратор английского языка'
    },
    {
        id: 4,
        img: [Person4],
        name: 'Козлова Екатерина Ивановна',
        profession: 'Менеджер школы '
    },
    {
        id: 5,
        img: [Person5],
        name: 'Никитина Елена Петровна',
        profession: 'Координатор занятий по английскому'
    },
    {
        id: 6,
        img: [Person6],
        name: 'Антонова Ирина Станиславовна',
        profession: 'Преподаватель IT-английского'
    },
    {
        id: 7,
        img: [Person7],
        name: 'Максимова Оксана Дмитриевна',
        profession: 'Преподаватель IT-английского'
    },
    {
        id: 8,
        img: [Person8],
        name: 'Смирнова Людмила Михайловна',
        profession: 'Автор онлайн учебников английского языка'
    },
    {
        id: 9,
        img: [Person9],
        name: 'Антонова Ирина Станиславовна',
        profession: 'Преподаватель IT-английского'
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>О нас</h1>
                <p className='text-center w-75 mb-5'>
Присоединяйтесь к нам и начните свой путь к владению техническим английским прямо сейчас!</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Присоединяйтесь к нам прямо сейчас !</h2>
                    <p class='unique-class-1'>YourTechEnglish была основана группой опытных преподавателей и лингвистов, специализирующихся на обучении техническому английскому. За время своего существования мы помогли многим студентам достигнуть своих целей и раскрыть свой потенциал. Наша школа постоянно совершенствуется и развивается, следуя новейшим трендам в области образования.Благодаря упорному труду основателей и поддержке ключевых лиц, школа стала признанным лидером в области обучения техническому английскому. Мы гордимся своими успехами, полученными за время существования, и стремимся к постоянному развитию</p>
                    <p className='unique-class-2'>Наши преподаватели - профессионалы с большим опытом работы в области обучения и IT индустрии. Они заботятся о каждом студенте, помогая им достичь своих целей и преодолевать языковые барьеры. Наши преподаватели являются сертифицированными специалистами и постоянно совершенствуют свои знания и навыки.Отзывы и рекомендации студентов подтверждают высокий уровень их компетенции. У нас Вы найдете только экспертов своего дела.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Контакты</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Наши преподаватели</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                      <div key={person.id} className='col-md-4'>
                      <img src={person.img} className='img-fluid' alt="" />
                      <p className='mt-2'>{person.name}</p>
                      <p>{person.profession}</p>
                  </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;