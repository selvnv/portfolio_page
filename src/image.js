const randomSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '=', '+'];

function getRandomTextTail(length = 3) {
    let result = '';
    const symbolsCount = randomSymbols.length;

    for (let i = 0; i < length; i++) {
        result += randomSymbols[Math.floor(Math.random() * symbolsCount)];
    }

    return result;
}

function handleHeaderMouseEnter() {
    // Элемент, на котором произошло событие <div class="header_content">
    const element = this;

    // Сохранение исходного текста
    const originalText = element.dataset.originalText || element.textContent.trim();

    // Сохранить исходный текст в dataset, если ещё не сохранен
    if (!element.dataset.originalText) {
        element.dataset.originalText = originalText;
    }

    let current = "";
    let index = 0;

    // Вложенная функция анимации
    function animate() {
        if (index < originalText.length) {
            // "Подгрузить" один символ
            current += originalText[index];
            index++;

            // Добавить случайные символы в конец
            const randomTail = getRandomTextTail();

            // Отобразить текущий прогруженный текст + случайный текстовый хвост
            element.textContent = current + randomTail;
            // Запомнить идентификатор таймера в элементе (для отмены анимации в случае повторного наведения курсора)
            element.timeoutId = setTimeout(animate, 50);
        } else {
            // Отобразить полный текст
            element.textContent = originalText;
        }
    }

    // Остановить предыдущую анимацию если повторно навели курсор
    if (element.timeoutId) clearTimeout(element.timeoutId);
    // Запустить анимацию
    animate();
}

// Обработчик mouseleave
function handleHeaderMouseLeave() {
    // Остановить анимацию
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        // Очистить свойство с id таймера
        this.timeoutId = null;
    }
    // Восстановить текст
    const originalText = this.dataset.originalText || this.textContent.trim();
    this.textContent = originalText;
}

function selectImageByClick(event) {
    const clickedImage = event.target;
    const rowSection = clickedImage.closest('.row_section');

    // Найти все изображения в этой секции
    const allImages = rowSection.querySelectorAll('.row_image_list img');

    // Убрать выделение со всех
    allImages.forEach(img => {
        img.parentElement.classList.remove('single_image_pointer');
    });

    // Добавить выделение текущему
    clickedImage.parentElement.classList.add('single_image_pointer');

    // Найти превью в этой же секции
    const previewImage = rowSection.querySelector('.row_image_preview_wrapper img');

    if (previewImage) {
        // Анимация смены
        previewImage.classList.add('fade-out');

        setTimeout(() => {
            previewImage.src = clickedImage.src;
            previewImage.alt = clickedImage.alt || 'Preview';

            // Убираем fade-out после загрузки изображения
            previewImage.onload = () => {
                previewImage.classList.remove('fade-out');
            };

            // На случай если изображение уже в кеше
            setTimeout(() => {
                if (previewImage.classList.contains('fade-out')) {
                    previewImage.classList.remove('fade-out');
                }
            }, 300);
        }, 300);
    }
}

function zoomImage(event) {
    if (event.target.tagName == "IMG") {
        const parentElement = event.target.parentElement;
        parentElement.classList.toggle("full_screen_image_wrapper");
    } else if (event.target.classList.contains("full_screen_image_wrapper")) {
        event.target.classList.toggle("full_screen_image_wrapper");
    }
}

function init() {
    // Добавить обработчик на все row_section для делегирования событий
    document.querySelectorAll('.row_section').forEach(section => {
        section.addEventListener('click', function(event) {
            // Проверяем, что кликнули по изображению в row_image_list
            if (event.target.matches('.row_image_list img')) {
                selectImageByClick(event);
            }
        });
    });

    document.querySelectorAll(".header_content").forEach(header => {
        // Сохраняем оригинальный текст в dataset
        header.dataset.originalText = header.textContent.trim();

        // Назначаем обработчики
        header.addEventListener("mouseenter", handleHeaderMouseEnter);
        header.addEventListener("mouseleave", handleHeaderMouseLeave);
    });

    document.querySelectorAll(".row_image_wrapper").forEach(image_wrapper => {
        image_wrapper.addEventListener("click", zoomImage);
    });
}

window.addEventListener("DOMContentLoaded", init);