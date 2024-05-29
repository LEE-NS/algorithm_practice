// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 등장 횟수가 같은 문자가 있는 경우 같은 등장 횟수를 가진 문자 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a'

function mostFrequentChar(s) {
  // input : 문자열
  // output : 등장 횟수가 가장 많은 문자를 담은 배열
  // 문자열을 순회하면서 각 문자를 빈 객체에 담는다.
  // 객체의 각 key를 배열로 만든다.
  // key로 구성된 배열을 value값을 기준으로 내림차순으로 정렬
  // 배열의 0번째 값을 반환
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    !obj[s[i]] ? (obj[s[i]] = 1) : obj[s[i]]++
  }
  const letters = Object.keys(obj)
  letters.sort((a, b) => obj[b] - obj[a])
  const answer = letters[0]
  return answer
}

// 테스트 코드
function testMostFrequentChar() {
  const testCases = [
    { input: "banana", expected: ["a"] }, // n은 a보다 등장 횟수가 1 적기 때문에 제외
    { input: "apple", expected: ["p"] },
    { input: "mississippi", expected: ["i", "s"] },
    { input: "aabbcc", expected: ["a", "b", "c"] },
  ]

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = mostFrequentChar(input)
      if (!expected.includes(result))
        throw new Error(`Expected one of ${expected}, but got ${result}`)
      console.log(`Test ${index + 1}: Passed`)
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`)
    }
  })
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar()
