import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'

export function replaceDate(date: string) {
    dayjs.extend(relativeTime)
    dayjs.locale('ru')

    const timeToday = new Date().getDate();
    const timeDay = Number(dayjs(date).format('D'))
    const timeWatch = dayjs(date).format('H:mm')
    const timeGMT = new Date(date).toLocaleTimeString('ru-Ru', { timeZoneName: 'short' }).split(' ')[1]
    const timeDayFromNow = dayjs(date).fromNow()
    let textDay = ''

    if (timeToday === timeDay) {
        textDay = 'Сегодня'
    } else if ((timeToday - timeDay) === 1) {
        textDay = 'Вчера'
    }

    return ((timeToday - timeDay) > 1 ? timeDayFromNow : textDay) + ', ' + timeWatch + ' i-' + timeGMT
}
