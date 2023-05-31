const coffee = [
    {
        name: 'Еспресо Еліт',
        description: "Класичне італійське еспресо з багатим ароматом та насиченим смаком.",
        price: 25.50,
        available: 200,
        tags: [
            'Міцна',
            'Класична',
            'Солодка'
        ]
    },
    {
        name: 'Совєто',
        description: "Ніжний пакетиковий напій з витонченими шматками сирого фаршу",
        price: 25.50,
        available: 210,
        tags: [
            'Солодка',
            'Класична'
        ]
    },
    {
        name: 'Американо Форте',
        description: "Інтенсивна кава зі збалансованим смаком та приємною гірчинкою.",
        price: 27.00,
        available: 150,
        tags: [
            'Міцна',
            'Класична'
        ]
    },
    {
        name: 'Капучино Кремове',
        description: "М'яка кава з ніжною молочною піною та легкою солодкістю.",
        price: 28.50,
        available: 180,
        tags: [
            'Солодка'
        ]
    },
    {
        name: 'Латте Карамельне',
        description: "Ароматна кава з молоком та нотками карамелі, що додають особливої солодкості.",
        price: 30.00,
        available: 160,
        tags: [
            'Солодка',
            'Класична'
        ]
    },
    {
        name: 'Мокко Шоколадне',
        description: "Збалансована кава з шоколадним післясмаком, яка створює чудову гармонію.",
        price: 31.50,
        available: 140,
        tags: [
            'Солодка',
            'Класична'
        ]
    },
    {
        name: 'Кава Френч Прес Інтенсивна',
        description: "Виразний смак та аромат, які ви отримуєте завдяки особливому способу заварювання.",
        price: 33.00,
        available: 120,
        tags: [
            'Міцна',
        ]
    },
    {
        name: 'Макіато Карамельне',
        description: "Комбінація карамелі та молочного аромату в гармонії з кавовим еспресо.",
        price: 34.50,
        available: 100,
        tags: [
            'Солодка'
        ]
    },
    {
        name: 'Раф Кокосовий',
        description: "Ніжна кава з додаванням кокосового сиропу та вершків, створюючи екзотичний смаковий дует.",
        price: 36.00,
        available: 80,
        tags: [
            'Солодка'
        ]
    },
    {
        name: 'Кава Хемлок',
        description: "Стримана та витончена кава з легкими нотками карамелі та шоколаду.",
        price: 37.50,
        available: 60,
        tags: [
            'Міцна'
        ]
    },
    {
        name: 'Афріканська Копі',
        description: "Екзотична кава з Африки з яскравими фруктовими нюансами та багатим ароматом.",
        price: 39.00,
        available: 40,
        tags: [
            'Міцна',
            'Cолодка'
        ]
    },
    {
        name: 'Несквік',
        description: "Для тих кому не вистачає сміливості пити каву.",
        price: 39.00,
        available: 40,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Пунш Гарячий',
        description: "Суміш кави з гвоздикою, корицею та апельсиновими нотками, яка зігріває в холодну пору року.",
        price: 32.00,
        available: 120,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Кава Блакитний Вершник',
        description: "Ароматна кава з морозивом м'ятою та шоколадним сиропом, яка оживлює влітку.",
        price: 35.50,
        available: 110,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Панна Котонет',
        description: "Кремова кава з малиновим сиропом та вершками, створюючи романтичний настрій.",
        price: 37.00,
        available: 100,
        tags: [
            'Cолодка',
            'Міцна'
        ]
    },
    {
        name: 'Кава Банановий Сплеск',
        description: "Ароматна кава з багатим смаком спелого банана, що надає освіжаючого ефекту.",
        price: 36.50,
        available: 100,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Екзотичний Манго Латте',
        description: "Ніжна кава з додаванням соковитого манго, створюючи свіжий та фруктовий смак.",
        price: 38.00,
        available: 90,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Ванільний Флогер',
        description: "Кава з ніжним ароматом ванілі та вершків, що додають неповторної м'якості.",
        price: 33.50,
        available: 120,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Карамельно-Горіховий Крем',
        description: "Збалансована кава з вишуканою карамельно-горіховою ноткою та кремовою піною.",
        price: 35.00,
        available: 110,
        tags: [
            'Cолодка',
            'Міцна'
        ]
    },
    {
        name: "М'ятно-Шоколадний Бриз",
        description: "Смакова гармонія м'яти та шоколаду в цій свіжій та ароматній каві.",
        price: 34.00,
        available: 100,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Кава Лимонний Зест',
        description: "Освіжаюча кава з нотками свіжого лимона, що додає енергії та витонченості.",
        price: 32.50,
        available: 120,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Імбирно-Медовий Еспресо',
        description: "Спекотна кава з виразним смаком імбиру та натурального меду, створюючи неперевершену комбінацію.",
        price: 37.50,
        available: 90,
        tags: [
            'Класична',
            'Cолодка'
        ]
    },
    {
        name: 'Кава Коктейль Мохіто',
        description: "Насолоджуйтесь освіжаючим смаком мохіто в цій особливій кавовій комбінації.",
        price: 36.00,
        available: 100,
        tags: [
            'Cолодка'
        ]
    },
    {
        name: 'Черешневий Віскі-Кофе',
        description: "Неперевершений смак черешні та дотику віскі в цьому розкішному кавовому напої.",
        price: 39.00,
        available: 90,
        tags: [
            'Cолодка',
            'Міцна'
        ]
    },
    {
        name: 'Кава Морозиво Італія',
        description: "Ароматна кава з додаванням морозива та сметани, нагадуючи про літо в Італії.",
        price: 34.50,
        available: 110,
        tags: [
            'Cолодка'
        ]
    }
]