export const createUser = (credentials) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users'
    data: credentials
  })
}
