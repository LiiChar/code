import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
import numpy as np
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler

def generate_training_data(sample_size):
    xs = []
    xy = []

    for _ in range(sample_size):
        # Генерация случайных коэффициентов квадратного уравнения
        a = np.random.uniform(-10, 10)
        b = np.random.uniform(-10, 10)
        c = np.random.uniform(-10, 10)

        # Вычисление дискриминанта
        discriminant = b**2 - 4*a*c
        # discriminant = a + b + c

        # Создание тройки (a, b, c) и соответствующего дискриминанта
        xs.append([a, b, c])
        xy.append(discriminant)

    return np.array(xs), np.array(xy)

xs, ys = generate_training_data(1000)
scaler = MinMaxScaler()
xs_normalized = scaler.fit_transform(xs)
model = tf.keras.Sequential([
    keras.layers.Dense(units=3, activation='relu', input_shape=[3]),
    keras.layers.Dense(units=10, activation='relu'),
    keras.layers.Dense(units=1, activation='linear')  # Линейная активация для задачи регрессии
])

model.compile(optimizer='adam', loss='mean_squared_error')

model.fit(xs_normalized, ys, epochs=100)

# Нормализация входных данных для предсказания
input_data = np.array([[2, 4, 3]])
input_data_normalized = scaler.transform(input_data)

# Предсказание
prediction = model.predict(input_data_normalized)
print(prediction)