// 두 문자열의 교집합 문자 집합 구하기
// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['a', 'p', 'l', 'e'])

function commonCharacters(s1, s2) {
  // input : 두 개의 문자열
  // output : 교집합 문자 set
  // 두 문자열을 배열로 만들어 합친다. 이 배열을 arr로 선언
  // arr에서 중복을 제거한 배열을 contrast로 선언
  // contrast를 순회하면서 서로 겹치는 문자를 arr에서 모두 제거
  // arr을 Set으로 만들어서 중복을 모두 제거
  const arr = [...s1, ...s2];
  const contrast = Array.from(new Set(arr));
  for (let i = 0; i < contrast.length; i++) {
    if (arr.includes(contrast[i])) {
      arr.splice(arr.indexOf(contrast[i]), 1);
    }
  }
  const answer = new Set(arr);
  return answer;
}

// 테스트 코드
function testCommonCharacters() {
  const testCases = [
    { input: ["apple", "pineapple"], expected: new Set(["a", "p", "l", "e"]) },
    { input: ["hello", "world"], expected: new Set(["o", "l"]) },
    { input: ["abc", "def"], expected: new Set() },
    {
      input: ["abcdef", "fedcba"],
      expected: new Set(["a", "b", "c", "d", "e", "f"]),
    },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = new Set(commonCharacters(input[0], input[1]));
      const isEqual =
        expected.size === result.size &&
        [...expected].every((value) => result.has(value));
      if (!isEqual)
        throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
