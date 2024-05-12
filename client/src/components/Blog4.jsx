import React from 'react';
import { Link } from 'react-router-dom';
import BlogSectionImg from '../images/business-people.jpg';


function Blog4() {
  return (
    <div className='about-page'>
        
        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Reference letter: как написать рекомендательное письмо на английском языке</h2>
                    <p class='unique-class-1'>При написании reference letter нет необходимости следовать жестким требованиям, однако вам стоит включить в него следующую информацию:</p>
                    <ol>
                <li>дата написания рекомендации</li>
                <li>контактная информация лица, которому адресовано письмо</li>
                <li>обращение</li>
                <li>причина написания письма или краткая рекомендация</li>
                <li>информация об авторе письма и его профессиональных отношениях с кандидатом</li>
                <li> описание деятельности кандидата в компании, полученные им навыки</li>
                <li>причины, по которым кандидат подходит на ту или иную должность</li>
                <li>редложение предоставить дополнительную информацию и контакты автора письма</li>
                <li>подпись</li>
            </ol>
                   
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={BlogSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'center' }}> 
        <h2>Краткий словарь полезных фраз</h2> 
        
        <table>
    <thead>
      <tr>
        <th>Слово</th>
        <th>Перевод</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>I am thrilled/delighted/pleased to recommend...	</td>
        <td>Я рад/счастлив рекомендовать...
</td>
      </tr>
      <tr>
        <td>It is my pleasure to recommend...	</td>
        <td>Мне приятно порекомендовать...
</td>
      </tr>
      <tr>
        <td>I highly/strongly recommend Svetlana Gulevich for any position or career she may pursue.</td>
        <td>Я настоятельно рекомендую Светлану Гулевич на любую должность или направление, которое она для себя выберет.</td>
      </tr>
      <tr>
        <td>I worked with/alongside Svetlana Gulevich on several projects.	</td>
        <td>Я работал со Светланой Гулевич над несколькими проектами.</td>
      </tr>
      <tr>
        <td>She started as an engineer and quickly rose to a lead position.</td>
        <td>Она начала с позиции инженера и быстро выросла до ведущей должности.</td>
      </tr>
      <tr>
        <td>During our time together Svetlana displayed abilities/talent/skills.</td>
        <td>За время нашего сотрудничества Светлана проявила способности/талант/умения.</td>
      </tr>
      <tr>
        <td>In her time at UR Technology Inc., she showed...</td>
        <td>За время ее работы в UR Technology Inc. она показала...</td>
      </tr>
      <tr>
        <td>She contributed to the development of our company / made a huge contribution to our development.</td>
        <td>Она способствовала развитию нашей компании / внесла вклад в наше развитие.</td>
      </tr>
      <tr>
        <td>Svetlana’s contribution to UR Technology Inc. is huge/immense/undeniable.	</td>
        <td>Вклад Светланы в UR Technology Inc. велик/огромен/неоспорим.
</td>
      </tr>
      <tr>
        <td>She will be deeply missed at UR Technology Inc. / We will miss her at UR Technology Inc.	</td>
        <td>Нам в UR Technology Inc. будет очень ее не хватать.
</td>
      </tr>
      <tr>
        <td>We respect and support her striving/desire to seek another professional challenge.	</td>
        <td>Мы уважаем и поддерживаем ее желание/стремление найти новый профессиональный вызов.
</td>
      </tr>
    





     
    </tbody>
  </table>
</div>


     
    </div>
  )
}

export default Blog4;