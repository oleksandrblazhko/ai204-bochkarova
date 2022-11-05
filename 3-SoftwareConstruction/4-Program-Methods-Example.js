async sendSleepData(req, res) { // надіслати дані про сон
        const candidate = await User.findOne({ //шукаємо чи є в базі людина, що хоче надати дані
            where:
                { id: req.body.user_id }
        })
        if (candidate) { //якщо така персоні існує
            const sleep = await Sleep.create({ //створюємо екземпляр даних про сон
                user: req.body.user_id,
                date: req.body.date,
                duration: req.body.duration,
                coffeine: req.body.coffeine
            })
            res.status(201).json(sleep)// повертаємо екземпляр
        } else { // якщо щось пішло не так
            res.status(404).json({
                message: 'User with this email not found'//видаємо помилку
            })
        }
    }
    
async showDataSleep(req, res) { // переглянути дані про сон
        try {
            const sleeps = await Product.findAll({ //шукаємо всі дані, що стосуються конкретної людини
                where: {
                    user: req.body.user_id
                }
            })
            res.status(200).json(sleeps) //повертаємо екземпляри
        } catch (error) {  // якщо щось пішло не так
            errorHandler(res, error) //видаємо помилку
        }
    }
