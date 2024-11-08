// Change status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]")
if (buttonChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status")
  const path = formChangeStatus.getAttribute("data-path")
  console.log(path);

  buttonChangeStatus.forEach(button => {
    button.addEventListener("click", () => {
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");

      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      const action = path + `/${statusChange}/${id}?_method=PATCH`;
      formChangeStatus.action = action;

      formChangeStatus.submit();
    })
  });
}
// END Change status

// Xóa bản ghi
const listButtonDelete = document.querySelectorAll("[button-delete]");
if(listButtonDelete.length > 0) {
  const formDeleteItem = document.querySelector("#form-delete-item");
  listButtonDelete.forEach(button => {
    button.addEventListener("click", () => {
      const isConfirm = confirm("Bạn có chắc muốn xóa bản ghi này?");

      if(isConfirm) {
        const id = button.getAttribute("item-id");
        const path = button.getAttribute("data-path");
  
        const action = `${path}/${id}?_method=DELETE`
        formDeleteItem.action = action;
        formDeleteItem.submit();
      }
    })
  })
}
// END Xóa bản ghi