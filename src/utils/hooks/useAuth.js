const useAuth = () => {
  const user = localStorage.getItem('user')
  if (user) {
    return user
  } else {
    return false
  }
}

export default useAuth
