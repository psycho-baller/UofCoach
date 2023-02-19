const codes = []

const fetchPage = async (pageNum) => {
    const response = await fetch(`https://www.uofcourse.com/api/courses?limit=50&page=${pageNum}`)
    const page = await response.json()
    return page
}

let pageNum = 1
while (pageNum < 100) {
    const page = await fetchPage(pageNum)
    codes.push(...page.results.map(course => course.code))
    if (page.length < 50) break
    pageNum++
}

// turn the array into a hashmap for each course code where it's value is the course number
const courseCodes = codes.reduce((acc, code) => {
    const [courseCode, courseNumber] = code.split('-')
    if (!acc[courseCode]) acc[courseCode] = []
    acc[courseCode].push(courseNumber)
    return acc
}
    , {})
console.log(courseCodes)