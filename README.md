# Design-document

## Введение

«Найди совпадения» – десктоп-игра на Windows, MacOS и Linux, сделанная по правилам классических карточных игр формата «Найди пару» с некоторыми доработками. Главная особенность подобных игр – тренировка памяти. Целевая аудитория, на которую мы нацелены, это дети, подростки и студенты в возрасте от 6 до 25 лет. Мы постараемся сделать нашу игру уникальной за счёт особенностей дизайна и механики.

## Геймплей

Наша игра будет иметь 5 случайно генерируемых уровней. На каждом уровне перед игроком будет лежать некоторое количество карточек, у каждой карточки на экране есть ещё 1 или 2 дубликата. Основной целью игрока является запоминание и сопоставление друг с другом всех одинаковых карточек. 
Перед началом каждого уровня карточки лежат лицевой стороной вверх в течение некоторого времени – фаза запоминания. Чем выше уровень, тем меньше времени даётся игроку на запоминание изображений на карточках. По истечении времени все карточки переворачиваются рубашкой кверху. Игрок должен сопоставить все одинаковые карточки, чтобы пройти уровень. 
В игре предусмотрен таймер, который измеряет время, за которое игрок проходит все уровни. Чем меньше он затратил времени на прохождение уровней, тем выше он в таблице рейтинга. В этой таблице отображаются все зарегистрированные игроки и их рекорд по времени. Игра будет проходить в режиме соревнования между игроками на локальном компьютере.

## Особенности дизайна игры

В нашей игре будет уникальный дизайн карточек, за счёт которого она будет интересна людям разных возрастных категорий. Игрок сможет выбрать тематику игровых карточек, которые будет запоминать. Доступные темы будут включать в себя мемы с котятами, лягушками, и обезьянками. Также мы постараемся реализовать красивые и плавные переходы между уровнями, которые будут приятны глазу. 

## Дизайн-шаблоны страниц приложения

![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/b5b57a51-9070-485f-b72a-a8cd4c8310e0)

Регистрация нового игрока будет происходить автоматически после создания уникального имени пользователя и пароля. Пароль нужен для того, чтобы остальные игроки не смогли войти в данный аккаунт. Введя корректные данные и нажав на кнопку продолжить, авторизованный игрок попадёт в главное меню игры. В случае, если игрок хочет войти в уже созданный аккаунт, ему достаточно вести корректные данные в те же поля.

![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/28a18b8d-3ca0-4776-8310-263e5f0ff92f) ![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/87f7b6cf-1c7f-481e-8d0b-f376cf40b6f5) ![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/4b9a4a8a-ee44-4920-890f-2b5122287295)

Главное меню будет состоять из одной страницы и двух разворачивающихся окон, которые появляются и исчезают при нажатии на соответствующие кнопки. Справа можно увидеть таблицу рекордов – список рекордов первых 20 пользователей с минимальным временем прохождения игры. Снизу можно будет открывать меню для выбора темы карточек, которые будут использоваться в игре. После нажатия на кнопку “Играть” пользователь попадает в саму игру. Кнопка “Сменить игрока” возвращает игрока обратно на страницу авторизации.

![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/df8a57ac-71f9-4825-9cd1-c84d7b7597c0)

Игровая область состоит из поля с карточками для запоминания, таймера внизу и надписи о текущем уровне. После прохождения одного уровня игрок сразу переходит на следующий, пока игра не закончится. При желании пользователь может покинуть игру, нажав на кнопку “Выход”, тогда он вернётся в главное меню. Если игрок прошёл все 5 уровней, ему отобразится его итоговое время прохождения, и он вернется обратно в главное меню автоматически.

## Roadmap

![image](https://github.com/LeMelifs/TypescriptGame/assets/147232363/92790967-92e7-46e7-9678-ee3d82e12dcd)
