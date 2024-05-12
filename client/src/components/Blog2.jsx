import React from 'react';
import Blog2SectionImg from '../images/english-books.jpg';


function Blog2() {
  return (
    <div className='about-page'>
        
        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Как успешно провести переговоры на английском</h2>
                    <p class='unique-class-1'>Переговоры (negotiations) — это метод, с помощью которого люди заключают сделки и улаживают разногласия (to settle differences). В ходе этого процесса стороны ищут взаимовыгодные решения.</p>
                    <ul type="disc">
                      <li>четко определить цель (to have a clear goal);</li>
                      <li>знать, когда вы готовы идти на компромисс (to be prepared to compromise);</li>
                      <li>стремиться удовлетворить не только собственные интересы, но и потребности другой стороны (the other party’s satisfaction)</li>
                    </ul>
                   
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={Blog2SectionImg} className='img-fluid w-50' alt="" />
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'center' }}> 
        <h2>Словарь</h2> 
        <p className='content-type'>В первую очередь вам нужно предложить удобное для встречи (a meeting) время:</p>

        <table> <tr> <th>Слово</th> <th>Перевод</th> </tr> <tr> <td>I am calling to arrange the meeting next week.</td> <td>Я звоню, чтобы договориться о встрече на следующей неделе.</td> </tr> <tr> <td>Let’s meet on Wednesday.</td> <td>Давайте встретимся в среду.</td> </tr> <tr> <td>Let’s meet next Tuesday.</td> <td>Давайте встретимся в следующий вторник.</td> </tr> <tr> <td>Let’s arrange a call so that we can discuss it further.</td> <td>Давайте договоримся о звонке, чтобы мы смогли обсудить это в дальнейшем.</td> </tr> <tr> <td>Can we arrange a conference call for 15.00 on Monday 21 October?</td> <td>Можем ли мы организовать конференц-звонок в понедельник 21 октября в 15:00?</td> </tr> <tr> <td>How about 11 o’clock in the morning? Or is 10 o’clock a better time for you?</td> <td>Как насчет 11 утра? Или, может, 10 утра более подходящее время для вас?</td> </tr> <tr> <td>Could you confirm the date in writing, please?</td> <td>Не могли бы вы подтвердить дату в письменной форме, пожалуйста?</td> </tr> <tr> <td>Could we meet sometime next week?</td> <td>Можем ли мы встретиться на следующей неделе?</td> </tr> <tr> <td>Would it be possible for us to meet on Monday?</td> <td>Могли бы мы встретиться в понедельник?</td> </tr> <tr> <td>When would be a good time?</td> <td>Какое бы время вам подошло?</td> </tr> <tr> <td>What about December 13?</td> <td>Как насчет 13 декабря?</td> </tr> <tr> <td>Would tomorrow morning at 9.00 suit you?</td> <td>Вам подойдет завтра утром в 9:00?</td> </tr> <tr> <td>Shall we say 2.30, then?</td> <td>Тогда 14:30, допустим?</td> </tr> </table>

        
</div>



     
    </div>
  )
}
export default Blog2;