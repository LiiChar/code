import pygame

# Для случайного размещения монет
from random import randint

# Для поиска ресурсов
from pathlib import Path

# Для аннотации типов
from typing import Tuple

# Устанавливаем размеры окна
WIDTH = 800
HEIGHT = 600

# Как часто должны генерироваться монеты (мс)
coin_countdown = 2500
coin_interval = 100

# Сколько монет должно быть на экране, чтобы игра закончилась
COIN_COUNT = 10

# Определяем спрайт для игрока
class Player(pygame.sprite.Sprite):
    def __init__(self):
        """Инициализирует спрайт игрока"""
        super(Player, self).__init__()

        # Получаем изображение персонажа
        player_image = str(
            Path.cwd() / "pygame" / "images" / "alien_green_stand.png"
        )
        # Загружаем изображение, настраиваем альфа канал для прозрачности
        self.surf = pygame.image.load(player_image).convert_alpha()
        # Сохраняем в прямоугольнике, чтобы перемещать объект
        self.rect = self.surf.get_rect()

    def update(self, pos: Tuple):
        """Обновляет позицию персонажа

        Аргументы:
            pos {Tuple} -- (X,Y) позиция для движения персонажа
        """
        self.rect.center = pos

# Определяем спрайт для монет
class Coin(pygame.sprite.Sprite):
    def __init__(self):
        """Инициализирует спрайт монеты"""
        super(Coin, self).__init__()

        # Получаем изображение монеты
        coin_image = str(Path.cwd() / "pygame" / "images" / "coin_gold.png")

        # Загружаем изображение, настраиваем альфа канал для прозрачности
        self.surf = pygame.image.load(coin_image).convert_alpha()

        # Задаем стартовую позицию, сгенерированную случайным образом
        self.rect = self.surf.get_rect(
            center=(
                randint(10, WIDTH - 10),
                randint(10, HEIGHT - 10),
            )
        )

# Инициализируем движок
pygame.init()

# Настраиваем окно
screen = pygame.display.set_mode(size=[WIDTH, HEIGHT])

# Скрываем курсор мыши
pygame.mouse.set_visible(False)

# Запускаем часы для фиксации времени фрейма
clock = pygame.time.Clock()

# Создаем событие для добавления монеты
ADDCOIN = pygame.USEREVENT + 1
pygame.time.set_timer(ADDCOIN, coin_countdown)

# Настраиваем список монет
coin_list = pygame.sprite.Group()

# Инициализируем счет
score = 0

# Определяем звук для столкновения с монетой 

# Создаем спрайт героя и устанавливаем на заданную позицию
player = Player()
player.update(pygame.mouse.get_pos())

# Цикл событий
running = True
while running:

    # Проверяем, нажал ли пользователь кнопку закрытия окна
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # Определяем, нужно ли добавлять новую монету
        elif event.type == ADDCOIN:
            # Добавляем новую монету
            new_coin = Coin()
            coin_list.add(new_coin)

            # Ускоряем игру, если на экранее менее 3 монет
            if len(coin_list) < 3:
                coin_countdown -= coin_interval
            # Ограничиваем скорость
            if coin_countdown < 100:
                coin_countdown = 100

            # Останавливаем предыдущий таймер
            pygame.time.set_timer(ADDCOIN, 0)

            # Запускаем новый таймер
            pygame.time.set_timer(ADDCOIN, coin_countdown)

    # Обновляем позицию персонажа
    player.update(pygame.mouse.get_pos())

    # Проверяем, столкнулся ли игрок с монетой и удаляем, если это так
    coins_collected = pygame.sprite.spritecollide(
        sprite=player, group=coin_list, dokill=True
    )
    for coin in coins_collected:
        # Каждая монета стоит 10 очков
        score += 10
        # Воспроизводим звук для монеты
        coin_pickup_sound.play()

    # Проверяем, не слишком ли много монет
    if len(coin_list) >= COIN_COUNT:
        # Если монет много, останавливаем игру
        running = False

    # Указываем цвет фона
    screen.fill((255, 170, 164))

    # Рисуем следующие монеты
    for coin in coin_list:
        screen.blit(coin.surf, coin.rect)

    # Отрисовываем персонажа
    screen.blit(player.surf, player.rect)

    # Выводим текущий счет
    score_font = pygame.font.SysFont("any_font", 36)
    score_block = score_font.render(f"Score: {score}", False, (0, 0, 0))
    screen.blit(score_block, (50, HEIGHT - 50))

    # Отображаем всё на экране
    pygame.display.flip()

    # Скорость обновления - 30 кадров в секунду
    clock.tick(30)

# Готово! Печатаем итоговый результат
print(f"Game over! Final score: {score}")

# Делаем курсор мыши вновь видимым
pygame.mouse.set_visible(True)

# Выходим из игры
pygame.quit()