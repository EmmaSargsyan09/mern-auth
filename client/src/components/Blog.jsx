import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import Blog1Img from '../images/english-3.jpg';
import Blog2Img from '../images/english-2.jpg';
import Blog3Img from '../images/english-4.jpg';
import Blog4Img from '../images/english-6.jpg';
import Blog6Img from '../images/english-5.jpg';
import Blog7Img from '../images/english-7.jpg';
import './Blog1.css'



const blogs = [ 
    { 
    id: 1, 
    img: Blog1Img, 
    title: 'Английский для IT ', 
    description: 'Множество заказов на разработку программного обеспечения поступает к отечественным специалистам от иностранцев, и почти все заказчики предпочитают общаться на английском языке.'
},
{
    id: 2,
    img: Blog2Img,
    title: 'Переговоры ',
    description: 'Вы узнаете об этапах ведения переговоров, особенностях бизнес-этики в разных странах, а также выучите фразы и выражения которые помогут вам стать успешным участником деловых встреч'
},
{
    id: 3,
    img: Blog3Img,
    title: 'Business English',
    description: 'Business English: базовые принципы успешных переговоров.Что нужно знать, прежде чем зайти в переговорку.В статье расскажем о переговорных принципах из книги Start With No by Jim Camp'
},
{
    id: 4,
    img: Blog4Img,
    title: 'Reference letter',
    description: 'Как написать рекомендательное письмо на английском языке? В статье расскажем, что такое reference letter, для чего оно необходимо и как его составлять.'
},

{
    id: 6,
    img: Blog6Img,
    title: 'Язык науки',
    description: 'Когда-то наука была мультиязычной, однако сегодня подавляющее большинство ученых пишут статьи, издают книги и ведут конференции на английском'
},
{
    id: 7,
    img: Blog7Img,
    title: 'Английский ',
    description: 'Работа за границей требует хороших знаний английского языка для эффективного общения с коллегами, клиентами и заказчиками.Некоторые аспекты английского языка:'
},

];

function Blog() { return ( <div className='blog-page'> <header className='height-75'> <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'> <h1 className='text-center fw-semibold'>Блог</h1> <p className='text-center w-75 mb-5'>Разработчики начинают учить английский раньше любых языков программирования. Без него не напишешь код, не прочтешь документацию, не разберешься в интерфейсах программ.  
Вас ждут советы по изучению технического английского языка от наших преподавателей, а также подборки крутых ресурсов, онлайн-мероприятий для программистов и учебных материалов для самообучения.  
</p> </div> </header>
<div className='bg-body-tertiary py-5'>
        <div className="container">
            <div className="row g-4">
                {blogs.map((blog) => (
                    <div key={blog.id} className='col-md-6 col-lg-4'>
                            <div className='h-100 shadow scale-hover-effect bg-green text-light border-0'>

                                <img src={blog.img} alt={blog.title} className='card-img-top' />
                                <div className='p-md-5 d-flex flex-column align-items-center'>
                                    <h2 className='fs-2 mb-4'>{blog.title}</h2>
                                    <p className='text-center text-white'>{blog.description}</p>
                                    <Link to={`/blog/${blog.id}`} className="read-more-button">
                                       Читать далее</Link>
                                </div>
                            </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
) }

export default Blog;