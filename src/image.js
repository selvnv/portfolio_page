function setPreviewImage(new_src) {
    // Получить элемент, в который нужно установить картинку
    const image = document.querySelector(".row_image_preview_wrapper img");

    // Добавить класс для "затухания" изображения при смене
    image.classList.add("fade-out");
    setTimeout((img) => {
        img.classList.remove("fade-out");
        // Прописать новый источник картинки
        image.src = new_src;
    }, 500, image);
}

function clearSelection() {
    // Получить картинки из списка
    const images = document.querySelectorAll(".row_image_list img");

    // Для каждой картинки снять класс image_list_pointer, если присутствует
    images.forEach(image => {
        image.parentElement.classList.remove("single_image_pointer");
    });
}

function selectImageByClick(event) {
    // Сначала убрать выделение со всех картинок
    clearSelection();
    console.log(event.target.parentElement);
    // Затем проставить указатель на выбранную
    event.target.parentElement.classList.add("single_image_pointer");

    // Выбранную картинку устанавливаем на предпросмотр
    setPreviewImage(event.target.src);
}

function init() {
    document.querySelectorAll(".row_image_list img").forEach(image => {
        image.addEventListener("click", selectImageByClick);
    });
}

window.addEventListener("DOMContentLoaded", init);