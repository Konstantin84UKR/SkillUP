// Задание 3. Таймер обратного отсчета
// Оформить красиво, сделать в класе (ООП) и это можно прикладывать в резюме.
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// Плагин ожидает следующую HTML-разметку и показывает четыре цифры:
// дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// <div class="timer" id="timer-1">
//   <div class="field">
//     <span class="value" data-value="days">11</span>
//     <span class="label">Days</span>
//   </div>
//   <div class="field">
//     <span class="value" data-value="hours">11</span>
//     <span class="label">Hours</span>
//   </div>
//   <div class="field">
//     <span class="value" data-value="mins">11</span>
//     <span class="label">Minutes</span>
//   </div>
//   <div class="field">
//     <span class="value" data-value="secs">11</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

class Timer {
  constructor(dateFinish, refs) {
    this._dateFinish = dateFinish.getTime();
    this._days = 0;
    this._hours = 0;
    this._minute = 0;
    this._second = 0;
    this._refs = refs;
    this._Update = this.Update.bind(this);
  }

  dateDifference() {
    const dateNow = Date.now();
    // console.log(dateNow);
    // console.log(this._dateFinish);

    const dateDifference = this._dateFinish - dateNow;
    let secondDifference = Math.floor(dateDifference / 1000);
    let minuteDifference = Math.floor(secondDifference / 60);
    let hoursDifference = Math.floor(minuteDifference / 60);

    this._days = Math.floor(hoursDifference / 24);
    this._hours = Math.floor(hoursDifference - this._days * 24);
    this._minute = Math.floor(
      minuteDifference - this._hours * 60 - this._days * 24 * 60
    );
    this._second = Math.floor(
      secondDifference -
        this._minute * 60 -
        this._hours * 60 * 60 -
        this._days * 24 * 60 * 60
    );

    // console.log(this._second);
    // console.log(this._minute);
    // console.log(this._hours);
    // console.log(this._days);
  }

  StartTimer() {
    setInterval(this._Update, 1000);
  }

  Update() {
    this.dateDifference();
    this._refs.days.innerText = this._days;
    this._refs.hours.innerText = this._hours;
    this._refs.minute.innerText = this._minute;
    this._refs.second.innerText = this._second;
  }
}

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minute: document.querySelector('[data-value="mins"]'),
  second: document.querySelector('[data-value="secs"]')
};

console.log(refs);

let dateFinish = new Date("2022-01-01T00:00:00");
let timer = new Timer(dateFinish, refs);
timer.StartTimer();
