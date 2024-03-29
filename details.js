document.addEventListener('DOMContentLoaded', function () {
    const busStops = [
        { name: 'пл. Ленина', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'пл. Горького', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'ДК Восточный', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'школа №8', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'магазин Нефтяник', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'м-н Восточный', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'школа №12', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'б-р Страконицкий', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Рынок «Привоз»', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Горбольница', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Бассеин', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'школа №11', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Магазин Лидер', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'м-н Молодежный', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Рынок «Истпал»', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'ул. Нефтестроителей', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Автовокзал', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'завод Молочных продуктов', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'Швейная фабрика', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
        { name: 'ул. Куйбышева', schedule: { weekdays: '5:31, 5:58, 6:24, 6:52, 7:29, 8:04, 8:39, 9:10, 9:47, 11:04, 11:36, 12:29, 13:22, 14:15, 15:08, 16:01, 16:54, 17:47, 18:40, 19:33, 20:55, 21:30', weekends: '8:00, 8:34, 9:11, 10:28, 11:00, 11:53, 12:46, 13:39, 14:32, 15:25, 16:18, 17:11' } },
    ];


    function reverseBusStops(data) {
        const reversedStops = data.slice().reverse();
        console.log('reversedStops :>> ', reversedStops);
        return reversedStops;
    }



    function render(data, selector) {
        const accordionContainer = document.getElementById(selector);
        if (selector === 'busAccordion1') {
            data = reverseBusStops(busStops)
        }

        data.forEach((stop, index) => {

            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';

            const accordionHeader = document.createElement('div');
            accordionHeader.className = 'accordion-header';
            accordionHeader.innerHTML = `<strong>${stop.name}</strong>`;

            const accordionBody = document.createElement('div');
            accordionBody.className = 'accordion-body';
            accordionBody.innerHTML = `
                <p class='weekdays'><span>Рабочие дни:</span>  <br/> ${stop.schedule.weekdays}</p>
                <p class='weekends'><span>Выходные дни:</span> <br/> ${stop.schedule.weekends}</p>
            `;

            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionBody);
            accordionContainer.appendChild(accordionItem);

            accordionHeader.addEventListener('click', () => {
                accordionBody.style.display = (accordionBody.style.display === 'block') ? 'none' : 'block';
            });
        });
    }


    render(busStops, 'busAccordion')
    render(busStops, 'busAccordion1')
    openTab('tab1', null);
});

function openTab(tabName, event) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    // Проверяем, есть ли event, прежде чем добавлять класс
    if (event) {
        event.currentTarget.classList.add("active");
    } else {
        // Если event не передан, делаем первую кнопку активной
        tablinks[0].classList.add("active");
    }
}
