import React from 'react';
import { Link } from 'react-router-dom';
import BlogSectionImg from '../images/english-table.jpg';


function Blog6() {
  return (
    <div className='about-page'>
        
        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Как английский стал языком науки</h2>
                    <p class='unique-class-1'>Когда-то наука была мультиязычной, однако сегодня подавляющее большинство ученых пишут статьи, издают книги и ведут конференции на английском. Как и когда это произошло, расскажем в статье.</p>
                    <p className='unique-class-2'>Великобритания играла важную роль в развитии науки в древности, и многие научные термины были первоначально сформулированы на английском языке. В Renaissance такие ученые, как Уильям Шекспир, Фрэнсис Бэкон и другие начали публиковать свои работы на английском языке, что также способствовало распространению языка в академических кругах.</p>
                    <p class='unique-class-3'>Однако настоящий прорыв произошел в XIX веке, когда английский язык стал широко использоваться важнейшие научные журналы и публикации. В этот период научные открытия и теории, сформулированные на английском языке, стали широко распространяться по всему миру, что способствовало утверждению английского как основного языка науки.</p>
                    <p class='unique-class-4'>Сегодня большинство научных журналов, конференций и образовательных материалов написаны на английском языке, что делает его неотъемлемой частью научного мира. Таким образом, английский язык стал не просто языком науки, но и ее важным инструментом общения и распространения знаний по всему миру.</p>
                   
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={BlogSectionImg} className='img-fluid w-75 h-80' alt="" />
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'center' }}> 
        <h2>Английский в науке</h2> 
        <p className='content-type'>Для вашего удобства мы привели основные значения слов из инфографики Scientific American и примеры из статей журнала.</p>
        <table>
    <thead>
      <tr>
        <th>Слово</th>
        <th>Перевод</th>
        <th>Пример</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>a paper	</td>
        <td>научная статья, газета</td>
        <td>Paper shortage would be reduced. — Дефицит бумаги снизится.</td>

      </tr>
      <tr>
        <td>to require</td>
        <td>требовать</td>
        <td>Fighting malaria will require more innovative defenses. — Для борьбы с малярией потребуются более инновационные средства защиты.</td>
      </tr>
      <tr>
        <td>a day	</td>
        <td>день</td>
        <td>Monitor it regularly throughout the day. — Контролируйте его в течение дня.</td>
      </tr>
      <tr>
        <td>a person	</td>
        <td>человек</td>
        <td>Health officials are trying to figure out if the virus is moving from person to person. — Работники сферы здравоохранения пытаются выяснить, передается ли вирус от человека к человеку.</td>

      </tr>
      <tr>
        <td>to receive	</td>
        <td>получать</td>
        <td>A computer’s microphone and speakers can covertly send and receive data. — Микрофон и динамики компьютера могут тайно отправлять и получать данные.</td>

      </tr>
      <tr>
        <td>to turn</td>
        <td>поворачивать, вращаться;</td>
        <td>Does the planet really turn? — Правда ли, что планета вращается?</td>

      </tr>
      <tr>
        <td>great	</td>
        <td>великий, серьезный;
отличный, прекрасный</td>
        <td>Why do great scientists make great mistakes? — Почему великие ученые совершают серьезные ошибки</td>

      </tr>
      <tr>
        <td>volume</td>
        <td>объем;
том</td>
        <td>How does changing the shape affect its volume? — Как изменение формы влияет на ее объем?</td>

      </tr>
      <tr>
        <td>a patent	</td>
        <td>патент</td>
        <td>That ban was decided after Samsung accused Apple of infringing on its patents. — Решение о запрете был</td>

      </tr>
      




     
    </tbody>
  </table>
</div>


     
    </div>
  )
}

export default Blog6;