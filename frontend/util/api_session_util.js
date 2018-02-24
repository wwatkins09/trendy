export const createSession = (credentials) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {credentials}
  });
};

export const destroySession = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
}
