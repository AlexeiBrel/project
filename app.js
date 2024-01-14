const buses = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 16, 18, 19, 20, 21, 22, 23, 24, 201]
const wrap = document.querySelector('.wrap')

function render(data) {
    const html = data.map(i => `
        <div class="ui-item">
            <a class="rasp-title" href="details.html">
                <div class="clearfix">
                    <div class="ui-nomer">№${i}</div>
                    <div class="ui-title">
                        <h4>Начальная Ост. - <br/> Конечная Ост.</h4>                        
                    </div>
                </div>
            </a>
        </div>
        
    `).join('')
    wrap.innerHTML = html
}

render(buses)