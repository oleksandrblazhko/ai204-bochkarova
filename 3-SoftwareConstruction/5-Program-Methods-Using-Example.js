const SleepController = require('../classes')

let sleep = {
    "user_id": 1,
    "date": "05.11.2000",
    "duration": 4,
    "coffeine": true
} // створюємо дані

await SleepController.sendSleepData(sleep) // надсилаємо до контролеру
const sleeps = await SleepController.showDataSleep(user_id) // отримуємо список
