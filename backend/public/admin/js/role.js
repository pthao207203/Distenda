// Permission
const tablePermissions = document.querySelector("[table-permissions]")

if (tablePermissions){
  const buttonSubmit = document.querySelector("[button-submit]")

  buttonSubmit.addEventListener("click", () => {
    let permissions = []

    const rows = tablePermissions.querySelectorAll("[data-name]")

    rows.forEach(row => {
      const name = row.getAttribute("data-name")
      const inputs = row.querySelectorAll("input")

      if (name == "id") {
        inputs.forEach(input => {
          const id = input.value
          permissions.push({
            id: id,
            permissions: []
          })
        })
      } else {
        inputs.forEach((input, index) => {
          const checked = input.checked
          if (checked) {
            permissions[index].permissions.push(name)
          }
        })
      }
    })
    if (permissions.length > 0) {
      const formChangePermission = document.querySelector("#form-change-permission")
      const inputPermission = formChangePermission.querySelector("input[name='permission']")
      inputPermission.value = JSON.stringify(permissions)
      formChangePermission.submit()
    }
  })
}
// END Permission

// Permission Data Default
const dataRole = document.querySelector("[data-role]")
if (dataRole) {
  const roles = JSON.parse(dataRole.getAttribute("data-role"))
  const tablePermissions = document.querySelector("[table-permissions]")

  roles.forEach((role, index) => {
    const permissions = role.RolePermissions

    permissions.forEach(permission => {
      const row = tablePermissions.querySelector(`[data-name="${permission}"]`)
      const input = row.querySelectorAll("input")[index]

      input.checked = true
    })

  })
}
// END Permission Data Default