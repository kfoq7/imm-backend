export const calculateAge = (fechanacimiento: string) => {
  const birthDate = fechanacimiento.split('-')

  const dateCurrent = new Date()
  const yearCurrent = dateCurrent.getFullYear()
  const monthCurrent = dateCurrent.getMonth()
  const dayCurrent = dateCurrent.getDay()

  const year = parseInt(birthDate[0])
  const month = parseInt(birthDate[1])
  const day = parseInt(birthDate[2])

  let age = yearCurrent - year

  if (monthCurrent < month) age--
  else if (monthCurrent === month) {
    if (dayCurrent < day) age--
  }

  return age
}
