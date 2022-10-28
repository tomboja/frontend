export const getCourseMapping = (courses) => {
  const courseMap = []
  for (const course of courses) {
    const map = {}
    map.label = course.title
    map.value = course.courseNumber
    courseMap.push(map)
  }
  return courseMap
}

export const getFacultyMapping = (faculties) => {
  const facultyMap = []
  for (const faculty of faculties) {
    const map = {}
    map.label = faculty.firstName + ' ' + faculty.lastName
    map.value = faculty.userNumber
    facultyMap.push(map)
  }
  return facultyMap
}


export const classrooms =  [
    { label: 'Class room V1', value: 'V1' },
    { label: 'Class room V2', value: 'V2' },
    { label: 'Class room V3', value: 'V3' },
    { label: 'Class room V4', value: 'V4' },
    { label: 'Class room V5', value: 'V5' },
    { label: 'Class room V6', value: 'V6' },
    { label: 'Class room V7', value: 'V7' },
    { label: 'Class room V8', value: 'V8' },
    { label: 'Class room V9', value: 'V9' },
    { label: 'Class room V10', value: 'V10' }
  ]
