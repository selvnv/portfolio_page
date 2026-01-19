function init() {
    // Вешаем обработчик на все row_section для делегирования событий
    document.querySelectorAll('.row_section').forEach(section => {
        section.addEventListener('click', function(event) {
            // Проверяем, что кликнули по изображению в row_image_list
            if (event.target.matches('.row_image_list img')) {
                selectImageByClick(event);
            }
        });
    });
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

window.addEventListener("DOMContentLoaded", init);