const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const header = document.getElementById("header");

const d = new Date();
header.innerText = weekdays[d.getDay()];

fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyA9s2hodDwcYU6MvEj9zuHxNC0hXOanXKg")
    .then(res => res.json())
    .then(json => {
        const now = new Date();
        const today = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

        const lessonArray = json.items
            .filter(data => data.start && data.start.dateTime && data.end && data.end.dateTime)
            .filter(data => today === data.start.dateTime.split('T')[0])
            .map(data => {
                const startTime = data.start.dateTime.split('T')[1].substring(0, 5);
                const endTime = data.end.dateTime.split('T')[1].substring(0, 5);
                const summary = data.summary;
                return `${startTime}-${endTime}-${summary}`;
            })
            .sort();

        createLessonCard(lessonArray);
    });

const createLessonCard = (lessonArray) => {
    const lessonCont = document.getElementById('lessonCont');
    lessonCont.innerHTML = '';

    lessonArray.forEach(item => {
        const [startTime, endTime, summary] = item.split('-');
        const lessonItem = document.createElement('div');
        const lessonName = document.createElement('p');
        const lessonTime = document.createElement('p');
        const breakL = document.createElement('br');

        lessonItem.className = 'lesson-item';
        lessonName.className = 'lesson-name';
        lessonTime.className = 'lesson-time';
        breakL.className = 'lesson-break';

        lessonName.textContent = summary;
        lessonTime.textContent = `${startTime} - ${endTime}`;



        lessonItem.appendChild(lessonTime);
        lessonItem.appendChild(lessonName);
        lessonItem.appendChild(breakL);
        lessonCont.appendChild(lessonItem);
    });
}