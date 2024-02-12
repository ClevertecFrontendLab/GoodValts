import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    TrophyFilled,
} from '@ant-design/icons';

const dataObj = {
    sider: {
        nav: [
            { text: 'Календарь', logo: CalendarOutlined },
            { text: 'Тренировки', logo: HeartFilled },
            { text: 'Достижения', logo: TrophyFilled },
            { text: 'Профиль', logo: IdcardOutlined },
        ],
        exit: 'Выход',
    },
    header: {
        title: 'Приветствуем тебя в\u00A0CleverFit — приложении,\n которое поможет тебе добиться своей мечты!',
        button: 'Настройки',
        breadcrumbs: 'Главная',
    },
    main: {
        firstArticle:
            'С CleverFit ты сможешь:\n— планировать свои тренировки на\u00A0календаре, выбирая тип и\u00A0уровень нагрузки;\n— отслеживать свои достижения в\u00A0разделе статистики, сравнивая свои результаты с\u00A0нормами и\u00A0рекордами;\n— создавать свой профиль, где ты\u00A0можешь загружать свои фото, видео и отзывы о\u00A0тренировках;\n— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и\u00A0советам профессиональных тренеров.',
        secondArticle:
            'CleverFit — это не просто приложение, а твой личный помощник в\u00A0мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!',
        cards: [
            { description: 'Расписать тренировки', buttonText: 'Тренировки', logo: HeartFilled },
            { description: 'Назначить календарь', buttonText: 'Календарь', logo: CalendarOutlined },
            { description: 'Заполнить профиль', buttonText: 'Профиль', logo: IdcardOutlined },
        ],
    },
    footer: {
        feedback: 'Смотреть отзывы',
        download: {
            link: 'Скачать на телефон',
            description: 'Доступно в PRO-тарифе',
            buttons: [
                { os: 'Android OS', logo: AndroidFilled },
                { os: 'Apple iOS', logo: AppleFilled },
            ],
        },
    },
};

export default dataObj;
