import React from 'react'; 
import BlogSectionImg from '../images/english-language.jpg'; 

function Blog7() { return ( <div className='about-page'>
  <div className='container my-5'>
        <div className="row">
            <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                <h2 className='mb-4 mb-lg-5'>Английский для работы за границей
</h2>
                <p className='unique-class-1'>Если вы планируете работать за границей, вам необходимо хорошее знание английского языка. Английский считается глобальным языком бизнеса и общения.</p>
                <p className='unique-class-1'>Вот несколько советов, как улучшить свой английский для работы за границей:</p>

                <ol>
                <li>Пройдите курсы английского языка. Подумайте о том, чтобы записаться на курсы английского языка, чтобы улучшить свою грамматику, словарный запас, произношение и коммуникативные навыки. </li>
                <li>Практикуйтесь в разговорной речи по-английски. Практикуйтесь в разговорной речи по-английски как можно больше, будь то с носителями языка, партнерами по языковому обмену или перед зеркалом.</li>
                <li>Смотрите фильмы и телепередачи на английском языке. Просмотр фильмов и телешоу на английском языке поможет вам улучшить навыки слушания и познакомиться с различными акцентами и выражениями. </li>
                <li>Читайте книги и статьи на английском языке. Чтение книг, газет и статей на английском языке поможет вам улучшить понимание прочитанного и расширить словарный запас. Возьмите за привычку регулярно читать, чтобы быть в курсе текущих событий и тенденций.</li>
            </ol>

               
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
                <img src={BlogSectionImg} className='img-fluid w-75' alt="" />
            </div>
        </div>
    </div>

    <div style={{ textAlign: 'center' }}> 
        <h2>Английский для работы за границей</h2> 
        <p className='content-type'>Постоянно совершенствуя свои знания английского языка, вы будете лучше подготовлены к работе за границей и общению с международными коллегами и клиентами. Помните, что знание языка является ключом к успеху на рабочем месте по всему миру, поэтому сделайте изучение английского приоритетом, когда вы реализуете свои карьерные возможности за рубежом. </p>
        
        <div className="photos">
    <img src="https://img.freepik.com/free-photo/english-books-stacks-table-working-space_23-2149429571.jpg?t=st=1715466898~exp=1715470498~hmac=ecf85a5e3f2a70139aa4433e1c86a00bace5e4cff98bc036b797bdf351305b2e&w=1060" alt="Photo 1" style={{ width: '400px', height: '350px' }} />
    <img src="https://img.freepik.com/free-photo/english-book-resting-table-working-space_23-2149429625.jpg?t=st=1715466931~exp=1715470531~hmac=f1a73f2a887307e0cabf0b252de633b5d73a4f0dfe314e973ce332cf49ac12b5&w=1060" alt="Photo 2" style={{ width: '400px', height: '350px' }} />
    <img src="https://img.freepik.com/free-photo/english-books-stacks-table-working-space_23-2149429580.jpg?t=st=1715466950~exp=1715470550~hmac=121febae585575ea02928ea4b96827c89674912d0d967957839be9a091ab15b1&w=1060" alt="Photo 3" style={{ width: '400px', height: '350px' }} />
</div>

    </div>
</div>
); }

export default Blog7;