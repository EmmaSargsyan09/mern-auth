import React from 'react';
import { Link } from 'react-router-dom';
import BlogSectionImg from '../images/top-view.jpg';


function Blog1() {
  return (
    <div className='about-page'>
        
        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Зачем программисту английский язык</h2>
                    <p class='unique-class-1'>Важный инструмент коммуникации: английский язык является мировым языком программирования и IT-индустрии. Знание английского позволяет программисту эффективно общаться с коллегами из других стран, читать документацию, участвовать в форумах и конференциях.</p>
                    <p className='unique-class-2'>Доступ к источникам информации: большинство учебных материалов, онлайн-курсов, статей и документации на программирование доступны на английском языке. Знание языка позволяет программисту легче учиться и быть в курсе последних технологических новинок.</p>
                    <p class='unique-class-3'>Улучшение профессиональных навыков: английский язык помогает программисту лучше понимать техническую терминологию, изучать иностранный код, читать и анализировать чужой код, а также эффективно комментировать свой собственный код.</p>
                    <p class='unique-class-4'>Работа с большими компаниями: многие крупные IT-компании используют английский язык в своей работе. Знание языка позволяет программисту легче устроиться на работу в такие компании и успешно справляться с задачами.</p>
                    <p class='unique-class-5'>Продвижение карьеры: знание английского языка открывает программисту возможности для работы за рубежом, участия в интернациональных проектах и получения высокооплачиваемых вакансий.</p>
                   
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={BlogSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div style={{ textAlign: 'center' }}> 
        <h2>Базовый английский словарь для программиста</h2> 
        <p className='content-type'>В этом разделе мы привели базовые понятия, которые пригодятся каждому IT-специалисту. Для удобства мы выделили набор глаголов IT-тематики, а также слова, связанные с интернетом, аппаратным и программным обеспечением.</p>
        <table>
    <thead>
      <tr>
        <th>Слово</th>
        <th>Перевод</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>to back up (backup)</td>
        <td>выполнять резервное копирование</td>
      </tr>
      <tr>
        <td>to boot</td>
        <td>загружать, загружаться (например, об устройстве или операционной системе)</td>
      </tr>
      <tr>
        <td>to burn</td>
        <td>записывать на оптический диск</td>
      </tr>
      <tr>
        <td>to create	</td>
        <td>создавать</td>
      </tr>
      <tr>
        <td>to compile</td>
        <td>компилировать</td>
      </tr>
      <tr>
        <td>to connect</td>
        <td>соединять, подключаться</td>
      </tr>
      <tr>
        <td>to copy	</td>
        <td>копировать</td>
      </tr>
      <tr>
        <td>to cut</td>
        <td>вырезать в буфер обмена</td>
      </tr>
      <tr>
        <td>to debug</td>
        <td>отлаживать</td>
      </tr>
      <tr>
        <td>to decrypt</td>
        <td>расшифровывать</td>
      </tr>
      <tr>
        <td>to develop</td>
        <td>разрабатывать</td>
      </tr>
      <tr>
        <td>to disconnect	</td>
        <td>разъединять, отключаться</td>
      </tr>
      <tr>
        <td>to display	</td>
        <td>отображать</td>
      </tr>
      <tr>
        <td>to download	</td>
        <td>загружать, скачивать</td>
      </tr>
      <tr>
        <td>to enable	</td>
        <td>включать, активировать</td>
      </tr>
      <tr>
        <td>to execute	</td>
        <td>исполнять</td>
      </tr>
      <tr>
        <td>to format	</td>
        <td>форматировать</td>
      </tr>
      <tr>
        <td>to implement</td>
        <td>внедрять, реализовывать</td>
      </tr>
      <tr>
        <td>to load	</td>
        <td>загружать</td>
      </tr>
      <tr>
        <td>to plug in	</td>
        <td>подключать</td>
      </tr>
      <tr>
        <td>to read	</td>
        <td>считывать</td>
      </tr>
      <tr>
        <td>to restore		</td>
        <td>восстанавливать</td>
      </tr>
      <tr>
        <td>to save		</td>
        <td>сохранять</td>
      </tr>


      <tr>
        <td>to scroll up/down	</td>
        <td>прокручивать вверх/вниз (например, веб-страницу)</td>
      </tr>
      <tr>
        <td>to sort</td>
        <td>сортировать</td>
      </tr>
      <tr>
        <td>to uninstall</td>
        <td>деинсталлировать, удалять</td>
      </tr>
      <tr>
        <td>to update	</td>
        <td>улучшать, модернизировать</td>
      </tr>
      <tr>
        <td>to upload		</td>
        <td>загружать, скачивать</td>
      </tr>

      <tr>
        <td>to verify	</td>
        <td>проверять</td>
      </tr>
      <tr>
        <td>a bookmark</td>
        <td>закладка (в браузере)</td>
      </tr>
      <tr>
        <td>a browser		</td>
        <td>браузер, обозреватель</td>
      </tr>
      <tr>
        <td>a domain	</td>
        <td>домен</td>
      </tr>
      <tr>
        <td>a gateway	</td>
        <td>шлюз</td>
      </tr>
      <tr>
        <td>a hyperlink		</td>
        <td>гиперссылка</td>
      </tr>
      <tr>
        <td>a node	</td>
        <td>узел сети</td>
      </tr>





     
    </tbody>
  </table>
</div>


     
    </div>
  )
}

export default Blog1;